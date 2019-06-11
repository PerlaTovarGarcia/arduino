const {Board, Led} = require("johnny-five");
//var board = new five.Board();
let myBoard, myLed;
myBoard=new Board()

myBoard.on('ready', function() {
  myLed=new Led(13);
  myLed.strobe(2000);

})
