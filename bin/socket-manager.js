
var init = function( io ){

  io.on('connection', function( socket ){
  
    console.log('a user connected');
    
    socket.on( 'initPlayer', function( data ){             
      socket.data = data;
      socket.data.id = socket.id;   
      console.log('init data');
      console.log( data );
      updateClients( socket, io );
    });
    
    socket.on( 'actionData', function( data ){       
      actions( socket, io, data );
      updateClients( socket, io );
    });
   
    socket.on( 'chooseOponent', function( data ){ 
      initGame( socket, io, data.id, socket.data.id );      
    });
    
    socket.on('disconnect', function(){      
      console.log('user disconnected');
      updateClients( socket, io );      
    });

  });

  
}


var actions = function( socket, io, data ){
  //io.emit('actionData',  data );
  
  switch( data.action ){  
    case 'dataUpdate':            
      socket.data[ data.name ] = data.value;      
      break;  
  }
  
}

var initGame = function( socket, io, playerId, oponentId ){
  
  var clients = io.sockets.adapter.rooms;
  
  //iterate sockets
  for (var socketId in clients ) {   
    
    var emitter;    
    var player = io.sockets.connected[ socketId ];    
    
    if( socketId == playerId ){
      emitter = socket;
    }   
    if( socketId == oponentId ){
      emitter = socket.to( player.id );
    }
    
    emitter.emit( 'gameInit', {} );
    
  }
  
  
}

//broadcast updated clients list
var updateClients = function( socket, io ){  
      
  var clients = io.sockets.adapter.rooms;
  
  
  //iterate sockets
  for (var socketId in clients ) {   
      var player = io.sockets.connected[ socketId ];
      var clientsData = [];
      var emitter = null;  
    
      //to each socket i send socket data, excepts itself
      for (var id in clients ) {           
        if( socketId != id ){
          var oponent = io.sockets.connected[ id ];          
          clientsData.push( oponent.data );    
        }
        
      }
      
      console.log( 'jugadores enviados a '+player.id );
      console.log( clientsData );
      emitter =  socket.id == player.id ? socket : socket.to( player.id );
      emitter.emit( 'players', clientsData );
    
  }
  
  
  
  
}

exports.init = init;