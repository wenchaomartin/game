class Bird{
    constructor(){
        this.x = 50 
        this.y =  200
        this.width = 25
        this.height = 25
        this.weight = 0.5 
        this.volecity = 0
        this.vy = 0
        this.bird1Frame = new Image()
        this.bird1Frame.src = "img/bird_frame_1.png"
        this.bird2Frame = new Image()
        this.bird2Frame.src = "img/bird_frame_2.png"
        this.bird3Frame = new Image()
        this.bird3Frame.src = "img/bird_frame_3.png"
        this.bird4Frame = new Image()
        this.bird4Frame.src = "img/bird_frame_4.png"
    }

    update(){


        if(this.y > canvas.height - this.height){
           this.vy = 0
           this.y = canvas.height - this.height
        }else{
            this.vy += this.weight
            this.vy *= 0.9
            this.y += this.vy
        }

        if(this.y <  0){
            this.y = 0
            this.vy= 0
        }

        if(spaceDown){
            this.vy -= 2
        }


    }

    draw(){
        // ctx.fillStyle = 'red'
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.drawImage(this.x, this.y)
       let birdFrame = frame % 18
        switch(birdFrame){
            case 1:   ctx.drawImage(this.bird1Frame,this.x,this.y,80,80);break;
            case 2:   ctx.drawImage(this.bird2Frame,this.x,this.y,80,80);break;
            case 3:   ctx.drawImage(this.bird3Frame,this.x,this.y,80,80);break;
            case 4:   ctx.drawImage(this.bird4Frame,this.x,this.y,80,80);break;
            default: ctx.drawImage(this.bird1Frame,this.x,this.y,80,80);break;
        }
        
    

       }

    
     
    
}

let bird = new Bird()