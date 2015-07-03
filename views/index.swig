{% extends 'layout.swig' %}


{% block head %}
  {% parent %}  
{% endblock %}

{% block content %}
    
   {% parent %}  

   <div  class="container">

      <div class="starter-template">
        <p class="text-center" >Deja apretado tanto el botón de disparo como de escudo para aumentar su poder.</p>
        <p class="text-center" >
          <a href='https://github.com/nan-apps/NodeOpenFights' target='_blank' >
            https://github.com/nan-apps/NodeOpenFights
          </a>
        </p>
      </div>
      
     <div class="row" >
      
       <div class="col-md-12" id="game-container">
        <div id="cr-stage" class="mypanel" >
            <script type="text/javascript" >
              Game.init();
            </script>
        </div>
      </div>
       
     </div>
          
     <div class="row" >
       
       <div class=" col-md-offset-3 col-md-1" >
         
         <div class="form-group">
          <label for="initials" class="text-center">Tus iniciales</label>
          <input type="text" class="form-control input-lg" id="initials" maxlength="3" placeholder="AAA">
        </div>
         
<!--         <p class="pull-right" >Elegí Color!</p>-->
       </div>
       
       <div id="color-picker" ng-controller="ColorPickerController as colorPicker" class="col-md-1" >
         <div class="mypanel" >
            
            <div ng-repeat="color in colorPicker.colors" class="colorSelector {{color}}" >
              
            </div>
            
         </div>
       </div>
       
       <div id="player-picker" class="col-md-3" >
         <div class="mypanel" ></div>
       </div>
       
     </div>
     
     
    </div>

  
  

  
  

{% endblock %}

