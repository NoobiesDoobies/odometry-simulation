class Encoder{
    constructor(car){
        this.car = car;
        this.x = this.car.x;
        this.y = this.car.y;
        this.speedx = this.car.speedx;
        this.speedy = this.car.speedy;
        this.angle = this.car.angle;
    }

    draw(ctx){
        ctx.linewidth = 10;
        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.speedx, this.y-this.speedy);
        ctx.stroke();

        
    }


}