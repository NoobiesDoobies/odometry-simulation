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

        ctx.lineWidth=1
        ctx.strokeStyle = "red"
        //translate ke pusat mobil
        let anglerad = this.car.anglespeed * Math.PI / 180;
        ctx.translate(translateX, translateY);
        ctx.rotate(this.car.angle * Math.PI / 180);
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y); 


        let rotationx = 0;
        let rotationy = 0;
        if(this.car.control.rotatecw || this.car.control.rotateccw){
            rotationx = 2*this.r*Math.sin(anglerad/2)*Math.sin(anglerad/2)
            rotationy = 2*this.r*Math.sin(anglerad/2)*Math.cos(anglerad/2)
        }
        
        
        let translationx = this.car.speedx
        let translationy = this.car.speedy
        
        ctx.lineTo(this.x-translationx-rotationx, 
                    this.y+translationy+rotationy);
            
        let tr = {"x" : translationx, 
        "y": translationy, 
        "rx": rotationx, 
        "ry": rotationy}
        
        ctx.stroke();

        // console.table(tr);

        ctx.rotate(-this.car.angle * Math.PI / 180);
        ctx.translate(-translateX, -translateY);
    }


}