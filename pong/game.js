const canvas = document.getElementById('id-canvas');
const ctx = canvas.getContext('2d');


canvas.width = 800
canvas.height = 600

class Ball {
    constructor(ctx) {
        this.ctx = ctx
        this.vx = 4
        this.vy = 4
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.radius = 10
    }

    draw() {

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath()
    }

    update() {
        this.y += this.vy
        this.x += this.vx

        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy
        }
    }
}

class Paddle {
    constructor() {
        this.x = 700
        this.y = 300
        this.vy = 1
        this.width = 10
        this.height = 100
        this.upKeyPress = false;
        this.downKeyPress =false;
    }

    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.upKeyPress) {
            this.y =  this.y - this.vy-15
        }

        if (this.downKeyPress) {
           this.y =  this.y + this.vy+15
        }
        if (this.y < 0) {
            this.y = 0
            this.vy =0
        }
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
            this.vy = 0
        }



    }
}

let ball = new Ball(ctx)

let paddle = new Paddle()

window.addEventListener('keydown', (event) => {
    if (event.code === "ArrowUp") {
        paddle.upKeyPress = true

    }
    if (event.code === "ArrowDown") {
        paddle.downKeyPress = true

    }
})
window.addEventListener('keyup', (event) => {
    if (event.code === "ArrowUp") {
        paddle.upKeyPress = false

    }
    if (event.code === "ArrowDown") {
        paddle.downKeyPress = false
    }
})

function collide(circle, rect) {
    if ((circle.y + circle.radius < rect.y) || (circle.y - circle.radius > rect.y + rect.height) || (circle.x + circle.radius < rect.x) || (circle.x - circle.radius > rect.x + rect.width)) {
        return false
    } else {
        return true
    }
}


const fps = 40;
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (collide(ball, paddle)) {
        ball.vx = -ball.vx;
        ball.vy = -0.4 * ball.vy
    }
    paddle.update()
    paddle.draw()
    ball.update()
    ball.draw()

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
};
animate();
