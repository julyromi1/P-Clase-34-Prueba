class Rocket {
    constructor (x, y, width, height, RocketAngle){
        var options = {
            isStatic: true,
            density: 0.1
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("Rocket.png");
    this.RocketAngle = RocketAngle;
    this.velocity = p5.Vector.fromAngle(RocketAngle);
    World.add(world, this.body);
}
}