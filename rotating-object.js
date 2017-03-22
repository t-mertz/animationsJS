elements = document.getElementsByClassName('rotating');
n = elements.length;

var angle = 0;
var step = 20;

function frame(){
    for (var i=0; i<n; i++) {
        elements[i].style['transform'] = 'rotate(' + angle + 'deg)';
    }
    angle += step;
}

var id = setInterval(frame, 80);