//export PATH=./node_modules/.bin:$PATH;

var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8080));
var five = require('johnny-five');


app.use(express.static(__dirname + '/'));

app.get('/', function (req,res) {
  	res.sendFile(__dirname + '/index.html');
});

var board = new five.Board({
  	repl:false
});

board.on('ready', function () {
    var speed, commands, motors;
    const servo = new five.Servo(9);


    /*const proximity = new five.Proximity({
    controller:'HCSR04I2CBACKPACK',
    //controller: "HCSR04",
    pin: 7,
    freq: 1000
  });



  proximity.on("data", function() {
      console.log("Proximity: ");
      console.log("  cm  : ", this.cm);
    });

    proximity.on("change", function() {
      if(this.cm <5){
        console.log('se esta llenando el plato');
        //servo.min();

      }
      console.log("The obstruction has moved.");
    });*/



    //anode.blink(1000);



    io.on('connection', function (socket) {

        socket.on('off', function (){
          console.log('abierto');
            servo.min();  // to shut it off (stop doesn't mean "off")
        });

        socket.on('on', function (){
          console.log('cerrado');
            servo.max(); // to turn on, but not blink

        });

    });
});
