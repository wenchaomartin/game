// canvas setup

const canvas = document.getElementById("id-canvas")
console.log(canvas)
canvas.height = 500
canvas.width = 800
const ctx = canvas.getContext("2d")

let score = 0
let gameFrame = 0
ctx.font = '50px sans-serif'


const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    clicked: false
}

let canvasPosition = canvas.getBoundingClientRect()


canvas.addEventListener("mousedown", function (event) {
    mouse.x = event.x - canvasPosition.left
    mouse.y = event.y - canvasPosition.top
    mouse.clicked = true

})

canvas.addEventListener("mouseup", function (event) {
    mouse.clicked = false
})

class Player {
    constructor() {
        this.x = canvas.width
        this.y = canvas.height / 2
        this.radius = 20
        this.dx =0
        this.dy = 0

    }

    update() {
        this.dx = this.x - mouse.x
        this.dy = this.y - mouse.y

        if (this.x != mouse.x) {
            this.x -= this.dx / 30
        }
        if (this.y != mouse.y) {
            this.y -= this.dy / 30
        }

    }

    draw() {
      
        if (mouse.clicked) {
            ctx.lineWidth = 0.1
            ctx.strokeStyle ='rgba(255,0,0,0.1)'
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
        ctx.beginPath() 
        ctx.arc(this.x, this.y,this.radius,0, 2*Math.PI)
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.closePath()
        // ctx.fillRect(this.x, this.y, this.radius, 30)
    }
}

const  p = new Player()

function animation(){
    ctx.clearRect(0, 0,canvas.width, canvas.height)
    p.update()
    p.draw()
    requestAnimationFrame(animation)
}
animation()


