class Bird{
    constructor(){
        this.x = 50 
        this.y =  200
        this.width = 25
        this.height = 25
        this.weight = 0.5 
        this.volecity = 0
        this.vy = 0
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
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const bird = new Bird()