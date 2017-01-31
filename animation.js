circles = [];
maxid = 0;

// can draw a dot on the canvas.
function Dot(el, posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.parent = el;
    this.id = maxid + 1;
    maxid++;
    this.isdrawn = false;

    this.move = function(dx, dy) {
        this.posx += dx;
        this.posy += dy;
    }
}

// draws the Dot object and returns the DOM element
Dot.prototype.draw = function() {
    var newel = document.createElement("div");
    newel.className = "square-dot";
    this.parent.appendChild(newel);
    this.isdrawn = true;

    return newel;
}

// parent element, here class 'animation' in which the dot is drawn
parent = document.getElementsByClassName("animation")[0];

// create new dot and draw it.
circle = new Dot(parent, 10, 10);
circles += circle;
dot = circle.draw();


// set positions for the animation
var positions = new Queue();
positions.enqueue(2);
positions.enqueue(4);
positions.enqueue(0);

// move a dot element to the next position.
// repeats if all positions have been covered.
function move_dot(el) {
    var pos = positions.dequeue();
    el.style.left = pos + "em";
    positions.enqueue(pos);
}

// move dot every half second
var id = setInterval(frame, 500);

// used to stop the animation
var animation_active = true;

// checks if the desired state of the animation,
// called in every step by setInterval
function frame() {
    if (!animation_active) {
        clearInterval(id);
    }
    else{
        move_dot(dot);
        id += 1;
    }
}

// stop the animation
function stop() {
    animation_active = false;
}

// start the animation
function start() {
    animation_active = true;
}