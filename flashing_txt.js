var elements = document.getElementsByClassName('flashing_text');
var n = elements.length;

var x = 1;
var step = 0.1;
var step_sin = 0.6;

function get_opacity_zigzag(x) {
    // f(x) = x ( for x in [0, 1]), 2-x (for x in [1, 2])
    var reduced_x = (x % 2);
    var slope = (reduced_x <= 1);
    return slope * reduced_x + !slope * (2-reduced_x);
}

function get_opacity_sin(x) {
    // f(x) = (1+sin(x))/2
    return (1+Math.sin(x))/2;
}

function frame() {
    for (var i=0; i < n; i++) {
        elements[i].style['opacity'] = get_opacity_sin(x);
        x += step_sin;
    }
}

var id = setInterval(frame, 80);