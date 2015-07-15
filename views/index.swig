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
       
     <div ng-controller="ControlsController" >
              
       <form name="controls"  >
         
       <div class="row" >

         <div class=" col-lg-offset-3 col-lg-2" >

           <div class="form-group">          
             <label class="text-center center-block" >
               Tus 3 letras
               <input name="nick" ng-change="setPlayerNick( nick )" ng-model="nick" type="text" required maxlength="3" class="form-control input-lg center-block" />
             </label>
            
<!--            <div class="color-selector color-button" >OK</div> -->
          </div>

  <!--         <p class="pull-right" >Elegí Color!</p>-->
         </div>

         <div id="color-picker"  class="col-lg-1 text-center" >
           <label>Tu color</label>
           <div class="mypanel" >              
              <div ng-repeat="color in colors" style="background-color:{{color}}" set-active ng-click="setPlayerColor(color)" class="color-selector" >
                  <i class="glyphicon glyphicon-ok" ></i>
              </div>

           </div>
         </div>

         <div id="oponent-picker" class="col-lg-3 text-center" >
           <label>Tu oponente</label>
           <div class="mypanel" >
              <div ng-repeat="player in players" class="color-selector" style="background-color:{{player.color}}" >
                <span class="nick" >{{player.nick}}</span>
                <span>{{player.life}}</span>                
              </div> 
              
           </div>
         </div>

       </div>
     </form>
       
     </div>
     
     
    </div>

  
  

  
  

{% endblock %}

