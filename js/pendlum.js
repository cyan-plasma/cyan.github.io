// Adapted from Dan Shiffman, natureofcode.com

angleMode = "radians";

var angle = 0;
var aVelocity = 0.03;

var draw = function() {
    background(255);
    
    var amplitude = 100;
    var x = amplitude * sin(angle);
    var y = amplitude * cos(angle);

    angle += aVelocity;
    
    resetMatrix();
    translate(width/2, height/2);
    
    stroke(0, 0, 0);
    fill(175, 175, 175);
    line(0, 0, x, y);
    ellipse(x, y, 20, 20);
};
