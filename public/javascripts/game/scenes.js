Crafty.scene('Splash', function() {
  
  var y = ( Game.height - Player.h ) / 2;
  var x = (Game.width/2)-(Player.w/2);
  //player 1
  Crafty.e("2D, DOM, Text").attr({ x: x, y: y-50, z:5, w:50 })
                           .text( 'A: disparo S: escudo' )
                           .textFont({ size: '9px' });

  Game.player1 = Crafty.e('Player')
                  .css({ border: '#fff solid 1px' })
                  .at( 'player1', x, y, 'transparent' );
  

});

Crafty.scene('Fight', function() {
  
    //recibo acciones del servidor para ejecutar
    Game.socket.on('actionData', function( actionData ){
      console.log( actionData );
      //var player =  actionData.playerId == 'player1' ? Game.player1 : Game.player2;
      //player.actionManager( actionData.action );
    });

    var y = ( Game.height - Player.h ) / 2;

    //player 1
    Crafty.e("2D, DOM, Text").attr({ x: Player.x, y: y-50, z:5, w:50 })
                             .text( 'A: disparo S: escudo' )
                             .textFont({ size: '9px' });

    Game.player1 = Crafty.e('Player').at( 'player1', Player.x, y, '#000' )
        .bind( 'KeyDown', function( e ){

            switch ( e.key ){
                case Controls.Player1.fire:                      
                  this.chargeFire(); 
                  break;
                case Controls.Player1.shield:                      
                  this.shield();              
                  break;
            }

        })
        .bind( 'KeyUp', function( e ){

            switch( e.key ){
                case Controls.Player1.fire:    
                  this.fire();      
                  break;
                case Controls.Player1.shield:  
                  this.unshield();  
                  break;                 
            }

        });   



    //player 2
    var x2 = Game.width - Player.x - Player.w;
    Crafty.e("2D, DOM, Text").attr({ x: x2, y: y-50, z:5, w:50})
                             .text( 'K: disparo L: escudo' )
                             .textFont({ size: '9px' });        

    Game.player2 = Crafty.e('Player').at( 'player2', x2, y, '#ef8c10' )
        .bind( 'KeyDown', function( e ){

            switch ( e.key ){
                case Controls.Player2.fire: this.chargeFire(); break;
                case Controls.Player2.shield: this.shield();  break;                    
            }            

        })
        .bind( 'KeyUp', function( e ){

            switch( e.key ){
                case Controls.Player2.fire: this.fire();  break;
                case Controls.Player2.shield: this.unshield();  break;    
            }

        }); 

    Game.player1.theOther = Game.player2;
    Game.player2.theOther = Game.player1;


});