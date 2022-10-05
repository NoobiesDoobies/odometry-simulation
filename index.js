const canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth


const ctx = canvas.getContext("2d")
ctx.fillStyle = "black"
const width = 100
const height = 100

const car = new Car((canvas.width-width )/2, (canvas.height-height)*3/4, width, height)
const coordinate = new Coordinate()

animate()
car.draw(ctx)
function animate(){
    // ctx.clearRect(0 ,0, window.innerWidth, window.innerHeight);
    car.update();
    ctx.save();
    
    coordinate.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();

    // console.log(car.getPositionx(), car.getPositiony())
    
    requestAnimationFrame(animate);
}
