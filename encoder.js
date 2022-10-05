class Encoder{
    constructor(car, x, y){
        this.car = car;
        this.x = x; //relatif mobil
        this.y = y; //relatif mobil
        this.r = Math.sqrt(x*x+y*y)
    }

    draw(ctx){

        let translateX = this.car.x+this.car.w/2
        let translateY = this.car.y+this.car.h/2

        ctx.lineWidth=5
        ctx.strokeStyle = "red"
        ctx.translate(translateX, translateY);
        ctx.rotate(this.car.angle * Math.PI / 180);
        ctx.beginPath();
        ctx.moveTo(this.x, this.y); 

        let anglerad = this.car.anglespeed * Math.PI / 180;
        let rotationx = 0;
        let rotationy = 0;
        if(this.car.control.rotatecw || this.car.control.rotateccw){
            rotationx = this.r*Math.sin(anglerad/2)*Math.cos(anglerad/2)
            rotationy = this.r*Math.sin(anglerad/2)*Math.sin(anglerad/2)
        }
        
        console.log(rotationx, rotationy)
        let translationx = this.car.speedx
        let translationy = this.car.speedy
        
        ctx.lineTo(this.x-translationx+rotationx, 
                    this.y+translationy-rotationy);
        ctx.stroke();

        ctx.rotate(-this.car.angle * Math.PI / 180);
        ctx.translate(-translateX, -translateY)
    }


}