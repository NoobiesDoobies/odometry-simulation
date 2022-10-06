class Encoder{
    constructor(car, x, y){
        this.car = car;
        this.x = x; //relatif mobil
        this.y = y; //relatif mobil
        this.r = Math.sqrt(x*x+y*y)
    }

    draw(ctx){

        const translateX = this.car.x+this.car.w/2
        const translateY = this.car.y+this.car.h/2

        ctx.lineWidth=1
        ctx.strokeStyle = "red"
        const anglespeedrad = this.car.anglespeed * Math.PI / 180;
        const phi = Math.atan(this.x/this.y);
    
        //translate ke pusat mobil
        ctx.translate(translateX, translateY);
        ctx.rotate(this.car.angle * Math.PI / 180);
        
        // sebelum matrix rotasi ke sumbu xy
        const dx = this.r*Math.sin(phi + anglespeedrad) - this.r*Math.sin(phi);
        const dy = this.r*Math.cos(phi + anglespeedrad) - this.r*Math.cos(phi);
        
        // setelah matrix rotasi ke sumbu xy
        let dxRotate = 0;
        let dyRotate = 0;
        if(this.car.control.rotatecw || this.car.control.rotateccw){
            const rotateAngle = Math.PI/2
            dxRotate = dx*Math.cos(rotateAngle) - dy*Math.sin(rotateAngle)
            dyRotate = dx*Math.sin(rotateAngle) + dy*Math.cos(rotateAngle);
        }
       

        ctx.beginPath();
        ctx.moveTo(this.x, this.y); 

        
        let translationx = this.car.speedx
        let translationy = this.car.speedy
        
        ctx.lineTo(this.x-translationx-dxRotate, 
                    this.y+translationy+dyRotate);
            
        ctx.stroke();

        console.log(dxRotate, dyRotate)

        ctx.rotate(-this.car.angle * Math.PI / 180);
        ctx.translate(-translateX, -translateY);
        
    }


}