var app = angular.module('openFigthsApp');

app.controller('ControlsController', [ '$scope', 'GameService', function( $scope, GameService ) {
      
      GameService.game.ctrlController = $scope;
  
      $scope.nick = '';
      
      $scope.colors = ['#01FFFF', '#DEB887', '#5F9EA0', '#7FFF00', '#FF7F50'];
  
      $scope.players = [];
      
      $scope.setPlayerNick = function(){
        
        if( typeof $scope.nick === 'undefined' ) $scope.nick = ''; 
        GameService.player.changeNick( $scope.nick );                
        
      }
      
      $scope.setPlayerColor = function( color ){
        
        GameService.player.changeColor( color, true );
        
      }
      
      $scope.updatePlayers = function( players ){                 
        $scope.players = players;
        $scope.$apply();        
      }
  
}]);

