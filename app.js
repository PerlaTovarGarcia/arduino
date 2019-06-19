var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(5000));
var five = require('johnny-five');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req,res) {
  	res.sendFile(__dirname + '/index.html');
});

var board = new five.Board({
  	repl:false
});

board.on('ready', function () {
    var speed, commands, motors;
    const servo = new five.Servo(9);


    //anode.blink(1000);



    io.on('connection', function (socket) {

        socket.on('off', function (){
          console.log('encendido');
            servo.min();  // to shut it off (stop doesn't mean "off")
        });

        socket.on('on', function (){
          console.log('apagado');
            servo.max(); // to turn on, but not blink
        });

    });
});
