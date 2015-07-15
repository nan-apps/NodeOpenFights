var app = angular.module('openFigthsApp');

app.directive('setActive', function(){

  return function(scope, element, attrs){

    element.on('click', function () {
      
      if( $(this).hasClass('active') ){
        
        $(this).removeClass('active');
        
      } else{
        
        $(this)
        .addClass('active')
        .siblings()
          .removeClass('active');
        
      }
      
      

    });

  };

});