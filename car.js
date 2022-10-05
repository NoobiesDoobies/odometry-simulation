class Car{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        this.speedx = 0;
        this.speedy = 0;
        this.accelaration = 0.2;
        this.maxSpeed = 5;
        this.friction = 0.05;
        this.angle = 0;

        this.control = new Control();
        this.encoder = new Encoder(this);
    }

    update(){
        this.#move()
    }

    #move(){
        if(this.control.right){
            this.speedx+=this.accelaration
        }
        if(this.control.left){
            this.speedx-=this.accelaration
        }
        if(this.control.forward){
            this.speedy+=this.accelaration
        }
        if(this.control.backward){
            this.speedy-=this.accelaration
        }
        if(this.control.rotatecw){
            this.angle += 2;
        }
        if(this.control.rotateccw){
            this.angle -= 2;
        }
        if(this.speedx > this.maxSpeed){
            this.speedx = this.maxSpeed;
        }
        if(this.speedx < -this.maxSpeed){
            this.speedx = -this.maxSpeed
        }
        if(this.speedxy != 0){
            if(this.speedx > 0){
                this.speedx -=this.friction;
            }
            else if(this.speedx < 0){
                this.speedx += this.friction;
            }
        }
        if(this.speedy > this.maxSpeed){
            this.speedy = this.maxSpeed;
        }
        if(this.speedy < -this.maxSpeed){
            this.speedy = -this.maxSpeed
        }
        if(this.speedy != 0){
            if(this.speedy > 0){
                this.speedy -=this.friction;
            }
            else if(this.speedy < 0){
                this.speedy += this.friction;
            }
        }
        if(Math.abs(this.speedx) < this.friction){
            this.speedx = 0
        }
        if(Math.abs(this.speedy) < this.friction){
            this.speedy = 0
        }

       
        this.x += this.speedx * Math.sin((this.angle+90)*Math.PI/180) + this.speedy * Math.sin(this.angle*Math.PI/180);
        this.y -= this.speedx * Math.cos((this.angle+90)*Math.PI/180) + this.speedy * Math.cos(this.angle*Math.PI/180);
        // console.log(this.speedx, this.speedy)
    }

    draw(ctx){
        let translateX = this.x+this.w/2
        let translateY = this.y+this.h/2
        ctx.translate(translateX, translateY)
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-translateX, -translateY);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.w, this.h/2);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y+this.h/2, this.w, this.h/2)

        this.encoder.draw(ctx);
        
        
    }

    getPositionx(){
        return this.x;
    }

    getPositiony(){
        return this.y;
    }

    getSpeedx(){
        return this.speedx * Math.sin((this.angle+90)*Math.PI/180) + this.speedy * Math.sin(this.angle*Math.PI/180);
    }

    getSpeedy(){
        return this.speedx * Math.cos((this.angle+90)*Math.PI/180) + this.speedy * Math.cos(this.angle*Math.PI/180);
    }

    getAngle(){
        return this.angle;
    }
};