var app = angular.module('openFigthsApp', []);
 
app.service('GameService', function(){
    
    this.game = Game;
    this.player = Game.player1;
    
});