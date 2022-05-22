class Backgroud{
    constructor(img){

        this.x = 0
        this.y =0 
        this.speed = 5
        this.img = img
       
    }

    draw(){
        ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,0,canvas.width,canvas.height)
        ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x+this.img.width,0,canvas.width,canvas.height)
    }

    update(){

        this.x -= this.speed 
        if(this.x<= -this.img.width){
            this.x = 0
        }
        this.draw()
    }

}
