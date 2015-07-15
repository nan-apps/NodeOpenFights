<!DOCTYPE html>
<html ng-app="openFigthsApp" >

  <head>
  
  <meta charset="utf-8">
  <title> <% title %> </title>

  {% block head %}
    
    <link href='http://fonts.googleapis.com/css?family=Inconsolata:700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css'>
    <link href="/stylesheets/global.css" rel="stylesheet" type="text/css" />
    <link href="/stylesheets/css.css" rel="stylesheet" type="text/css" />
    <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
  
    <script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.1/angular.min.js"></script>   
    <script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>    
    <script type="text/javascript" src="/bower_components/socket.io-client/socket.io.js"></script>
    
    <script type="text/javascript" src="/javascripts/game/crafty.js"></script>
    <script type="text/javascript" src="/javascripts/game/scenes.js"></script>
    <script type="text/javascript" src="/javascripts/game/components.js"></script>
    <script type="text/javascript" src="/javascripts/game/game.js"></script>
      
    <script type="text/javascript" src="/javascripts/services/gameService.js"></script> 
    <script type="text/javascript" src="/javascripts/controllers/controlsCtrl.js"></script> 
    <script type="text/javascript" src="/javascripts/directives/setActive.js"></script> 
  
  {% endblock %}
    
</head>
<body>
    {% block content %}
  
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">          
          <a class="navbar-brand" href="#">NodeOpenFigths</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
  
    {% endblock %}    
  
</body>

</html>