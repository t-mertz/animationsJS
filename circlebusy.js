// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
 

var canvas = document.getElementById('circlebusy');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 20;
var circ = Math.PI * 2;
var begin = 0;

context.lineWidth = 10;
context.strokeStyle = '#ad2323';


function animate(begin) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, begin, ((circ) * 0.5) + begin, false);
    context.stroke();
    begin++;
    requestAnimationFrame(function () {
        animate(begin)
    });
}

animate(0);