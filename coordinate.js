class Coordinate{
    constructor(size=20){
        this.size=size;
        this.left=0
        this.right=window.innerWidth;

        this.top=0;
        this.bottom=window.innerHeight;

       
    }
    draw(ctx){
        ctx.linewidth=5;
        ctx.strokeStyle="white";
        
        let x=0;
        let y=0;

        while(x<window.innerWidth){
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
            x+=this.size;
        }
        
        while(y<window.innerWidth){
            ctx.beginPath();
            ctx.moveTo(this.left, y);
            ctx.lineTo(this.right, y);
            ctx.stroke();
            y+=this.size;
        }
            
            
        
    
    }
}

function lerp(A,B,t){
    return A+(B-A)*t;
}

