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
    var anode = new five.Led(13);

    commands = null;

    anode.on();

    //anode.blink(1000);

    var blink = true;

    io.on('connection', function (socket) {

        socket.on('off', function (){
          console.log('encendido');
            anode.off();  // to shut it off (stop doesn't mean "off")
        });

        socket.on('on', function (){
          console.log('apagado');
            anode.on(); // to turn on, but not blink
        });

    });
});
