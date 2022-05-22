let canvas = document.getElementById("id-canvas")
canvas.width = 800
canvas.height = 600
let ctx = canvas.getContext("2d")
let scene = new Image();
scene.src = "background_single.png"

window.addEventListener("load", function(){

    class InputHandler {
        constructor(){
            this.keys=[]
            window.addEventListener("keydown", (e)=>{
                console.log(e.key)
                
            })
        }
    }

    class Backgroud{
        constructor(){
            this.image =scene
            this.speed =5
            this.positioX =0
        }

        draw(ctx){
            ctx.drawImage(this.image,this.positioX,0)
            ctx.drawImage(this.image,this.positioX+this.image.width,0)
        }
        update(){
            this.positioX -=this.speed
            if(this.positioX <this.image.width*-1){
                this.positioX = 0
            }
        }
    }

    let backgroud = new Backgroud()
    

    function animation(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        requestAnimationFrame(animation)
        backgroud.draw(ctx)
        backgroud.update()
    }

    animation()
    let inputHandler = new InputHandler()



})