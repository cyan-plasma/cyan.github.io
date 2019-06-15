
let bugs = []; // array of Jitter objects

function setup() {
    createCanvas(314, 314);
    // Create objects
    for (let i = 0; i < 100; i++) {
        bugs.push(new Jitter());
    }
}

function draw() {
    background(50, 39, 100);
    for (let i = 0; i < bugs.length; i++) {
        bugs[i].move();
        bugs[i].display();
    }
}

// Jitter class
class Jitter {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.diameter = 5;//random(10, 30);
        this.speed = 1.;
        this.amplitude = 1.;
//        this.amplitude = random(height)/100.;
        this.zonal = (this.y-158)/50;//1.1;
        this.nonzonal = 0.;
    }
    
    move() {
//        this.x += random(-this.speed, this.speed);
//        this.amplitude += random(-this.speed, this.speed)/100;
//        this.y += random(-this.speed, this.speed);
//        this.y += (4*cos((this.x-158)/100.)+1.58)*100;
//        this.nonzonal = random(-this.speed, this.speed)/100;
        var tmp = this.amplitude*cos((this.x)/50.)+this.amplitude*sin((this.x)/50.+1.5)+this.zonal+this.nonzonal;
        this.y = 50*tmp+158;

        this.x += tmp ;

        this.x = (this.x % 314);
//        this.y += 0.*sin(this.x/100);
        this.y = (this.y)%314;
    }
    
    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}
