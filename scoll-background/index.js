let canvas = document.getElementById('id-canvas')

let ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 700

let speed = 5 

let layer1Image = new Image()
layer1Image.src = "imgs/layer-1.png"


 let layer2Image = new Image()
 layer2Image.src = "imgs/layer-2.png"
 
 let layer3Image = new Image()
 layer3Image.src = "imgs/layer-3.png"

 let layer4Image = new Image()
 layer4Image.src = "imgs/layer-4.png"

 let layer5Image = new Image()
 layer5Image.src = "imgs/layer-5.png"

 let positionX =0
 let positionX2 = 2400
 
class Layer {
    constructor(image,positionX){
        this.positionX = positionX
        this.image = image 
    }
    
    update(){
       this. positionX -= speed
        if(this.positionX < -2400){
            this.positionX = 0
        } 
    
    }

    draw(){
        ctx.drawImage(this.image, this.positionX, 0)
        ctx.drawImage(this.image, this.positionX+2400, 0)
    }
}

let layer1 =  new Layer(layer1Image,0)
let layer2 =  new Layer(layer2Image,0)
let layer3 =  new Layer(layer3Image,0)
let layer4 =  new Layer(layer4Image,0)
let layer5 =  new Layer(layer5Image,0)

let array = [layer1, layer2, layer3, layer4, layer5]

function animation() {
    ctx.clearRect(0, 0,canvas.width, canvas.height)
    array.forEach(e=>{
        e.update()
        e.draw()
    })
    requestAnimationFrame(animation)
}
animation()
