let obstacles = []

class Obstacle{
    constructor() {
        this.x = 1500 + Math.random()*200
        this.y = 0;
        this.width =80
        this.top = canvas.height /3 +Math.random()*90;
        this.bottom = canvas.height /3 +Math.random()*100;
        this.speed =15
        this.counted = false

        this.topPipe = new Image()
        this.topPipe.src = "img/topPipe.png"
        this.bottomPipe = new Image()
        this.bottomPipe.src = "img/bottomPipe.png"
    }
    draw() {
        ctx.drawImage(this.topPipe,this.x, this.y,this.width,this.top);
        ctx.drawImage(this.bottomPipe,this.x ,canvas.height - this.bottom,this.width,this.bottom);
    }

    update() {
      
        this.x -= this.speed
    }

}


function handleObstacles(){
    if(frame % 50===0){
        obstacles.unshift(new Obstacle())
    }
    if(obstacles.length >3){
        obstacles.pop(obstacles[0])
    }

    for(var i=0;i<obstacles.length;i++){
        obstacles[i].draw()  
        obstacles[i].update()    
    }

}

