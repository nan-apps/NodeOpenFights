var express = require('express');
var http = require('http').Server( express() );
var router = express.Router();
var io = require('socket.io')(http); //esta instancia de http no es la q esta escuchando el puerto, talvez x eso no anda


//io.on('connection', function(socket){
//    console.log('a user connected');
//    socket.on('disconnect', function(){
//        console.log('user disconnected');
//    });
//});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'OpenFigths' });
});


module.exports = router;
