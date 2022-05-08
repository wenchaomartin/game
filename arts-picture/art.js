let canvas = document.getElementById("id-canvas")
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let particles = []
mouse = {
    x: null,
    y: null,
    radius: 300
}

window.addEventListener("mousemove", function (e) {
    
    mouse.x = e.x+canvas.clientLeft/2
    mouse.y = e.y+canvas.clientTop/2
})


function drawImage() {

    let imgwidth = png.width
    let imgheight = png.height
    const data = ctx.getImageData(0, 0, imgwidth, imgheight)
    ctx.clearRect(0, 0, imgwidth, imgheight)

    class Particle {
        constructor(x, y, color) {
            this.x = x + canvas.width / 2 - png.width * 2
            this.y = y + canvas.height / 2 - png.height * 2
            this.color = color
            this.radius = 2
            this.baseX = x + canvas.width / 2 - png.width * 2
            this.baseY = y + canvas.height / 2 - png.height * 2
            this.density = Math.random() * 10 + 2
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.closePath()
            ctx.fill()

        }

        update() {
            ctx.fillStyle = this.color

            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx * dx + dy * dy)

            let forceDirectionX = dx / distance
            let forceDirectionY = dy / distance

            const maxDistance = 200
            let force = (maxDistance - distance) / maxDistance
            if (force < 0) force = 0

            let directionX = forceDirectionX * force * this.density * 4
            let directionY = forceDirectionY * force * this.density * 4

            if (distance < this.radius + mouse.radius) {
                this.x -= directionX
                this.y -= directionY
            } else {

                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX
                    this.x = this.x - dx / 5
                }

                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY
                    this.y = this.y - dy / 5
                }

            }
            this.draw()

        }
    }

    function init() {
        

        for (let y = 0; y < data.height; y++) {
            for (let x = 0; x < data.width; x++) {

                if(data.data[4 * (y * data.width + x) + 3]>128){
                let positionX = x
                let positionY = y
                let color = "rgb(" +
                    data.data[4 * (y * data.width + x)] + "," +
                    data.data[4 * (y * data.width + x) + 1] + "," +
                    data.data[4 * (y * data.width + x) + 2]
                    + ")"
                particles.push(new Particle(positionX*4,positionY*4,color))
            }
         }
           
        }
        
    }

    function animation(){
        requestAnimationFrame(animation)
        // ctx.fillStyle = 'rgba(0,0,0,.05)'
        ctx.fillRect(0,0,innerWidth,innerHeight)
        for (var i = 0; i < particles.length;i++){
            particles[i].update()
        }
        
    }
    init()
    animation()
}

const png = new Image();
png.src ="data:image/png;base64,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"

window.addEventListener('load', (event) =>{
    ctx.drawImage(png, 0, 0)
    drawImage()
})



