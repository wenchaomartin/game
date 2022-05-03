// canvas setup
//音效的素材网站
//https://opengameart.org/
//图片素材 gamedeveloperstudio

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


const leftFish = new Image()
leftFish.src = "fish.png"
const rightFish = new Image()
rightFish.src = "flipfish.png"

const bubbleImage = new Image()
bubbleImage.src = "bubble.png"

class Player {
    constructor() {
        this.x = canvas.width
        this.y = canvas.height / 2
        this.radius = 30
        this.dx = 0
        this.dy = 0
        this.angle = 0

    }

    update() {
        this.dx = this.x - mouse.x
        this.dy = this.y - mouse.y

        if (this.x != mouse.x) {
            this.x -= this.dx / 20
        }
        if (this.y != mouse.y) {
            this.y -= this.dy / 20
        }
        this.angle = Math.atan2(this.dy, this.dx)

    }

    draw() {

        if (mouse.clicked) {
            ctx.lineWidth = 0.1
            ctx.strokeStyle = 'rgba(255,255,255,0)'
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
            playerSwiming.play()
        }
        ctx.beginPath()
        ctx.fillStyle = 'rgba(255,255,255,0)'
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        
        ctx.closePath()
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        // ctx.fillRect(this.x, this.y, this.radius, 30)
        if (mouse.x > this.x) {
            ctx.drawImage(rightFish, 0, 0, 1992 / 4, 981 / 3, -30, -30, 60, 60)
        } else {
            ctx.drawImage(leftFish, 0, 0, 1992 / 4, 981 / 3, -30, -30, 60, 60)
        }

        ctx.restore()
    }
}

const p = new Player()

let bubbleArray = []

class Bubble {

    constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * canvas.height
        this.radius = 20
        this.speed = 2
        this.distance = 0
        this.counted = false
    }

    update() {
        this.y -= this.speed
        let dx = p.x - this.x
        let dy = p.y - this.y

        this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = 'rgba(255, 255, 255, 0)'
        ctx.fill()
        ctx.closePath()
        ctx.drawImage(bubbleImage, this.x - 30, this.y - 30, this.radius * 3, this.radius * 3)

    }

}

const playerSwiming = document.createElement('audio')
playerSwiming.src = 'bubbles-single2.wav'
const bubblePop = document.createElement('audio')
bubblePop.src = 'pop3.ogg'

function handleBubbles() {

    if (gameFrame % 50 == 0) {
        let bubble = new Bubble()
        bubbleArray.push(bubble)
    }

    for (let i = 0; i < bubbleArray.length; i++) {

        bubbleArray[i].update()
        bubbleArray[i].draw()
        if (bubbleArray[i].y <= 0 - bubbleArray[i].radius * 2) {
            bubbleArray.splice(i, 1)
            i--
        }

        if (bubbleArray[i]) {
            if (bubbleArray[i].distance < bubbleArray[i].radius + p.radius) {

                if (!bubbleArray[i].counted) {
                    bubblePop.play()
                    bubbleArray[i].counted = true
                    score++
                }
                bubbleArray.splice(i, 1)
                i--

            }

        }
    }

}



function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    p.update()
    p.draw()

    gameFrame++
    ctx.fillStyle = 'red'
    ctx.fillText('score ' + score, 10, 50)
    handleBubbles()
    requestAnimationFrame(animation)
}
animation()


