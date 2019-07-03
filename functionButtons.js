//const socket = io();
var socket = require('socket.io')(app.listen(8080));
function offLed(){
   socket.emit('off');
   lalalalala(offLed);
}
function onLed(){
   socket.emit('on');
   kakakakakaka(onLed);
}


document.getElementById('b_off').onclick = offLed;
document.getElementById('b_on').onclick = onLed;

var mensaje = document.querySelector('#mensaje');
 var aika;
 function lalalalala(){
   aika=setTimeout(function(){
     mensaje.innerText=("Se esta llevando mucho el plato de aikaBB");
   },7000);
 };

 function kakakakakaka(){
   clearTimeout(onLed)
 };
