/**
 * @author Gnan
 * @date 10/08/2103  
 *  This file is part of OpenFights.
    Clonoluchas is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    OpenFights is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with OpenFights.  If not, see <http://www.gnu.org/licenses/>. 
 * 
 * */


fb = function( text ){
    if ( console.debug )
        console.debug( text );
    else if( console.log )
        console.log( text );
}

//key Codes
Controls = {
    Player1 : {
        fire:65,
        shield:83
    },
    Player2 : {
        fire:75,
        shield:76
    }
}

Game = {    
    width: 600,
    height: 300,    
    player1: null,
    player2: null,
    finish: function(){
        this.player1.unbind('KeyDown').unbind('KeyUp');
        this.player2.unbind('KeyDown').unbind('KeyUp');
    },
    ctrlController: null,
    socket: null,
    init : function(){
        
        Crafty.init( this.width, this.height );    
        //  Crafty.canvas.init();
        
        //init socket io client
        Game.socket = io();
        
        Crafty.scene('Splash');
      
        Game.socketManager();
        
    },
    chooseOponent: function( oponentId ){
    
      Game.socket.emit( 'chooseOponent', { id: oponentId });
      
    },
    socketManager: function(){
      
      Game.socket.emit( 'initPlayer', { life: Game.player1.life,                                  
                                  color: Game.player1.pColor,
                                  id: null });
      
      //updated player list
      Game.socket.on('players', function( data ){
        
        console.log(data);
        Game.ctrlController.updatePlayers( data );
        
      });
      
    }
    
};



