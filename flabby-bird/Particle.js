let particles = [];

class Particle {
    constructor() {
        this.x = bird.x
        this.y = bird.y
        this.radius = 5
        this.color = 'hsla('+hug+',100%,50%)';
        this.speedY = Math.random() - 0.5
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.x -= gameSpeed
        this.y += this.speedY
    
    }


}

function handleParticles() {

    particles.unshift(new Particle())

    for (var i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
    }

    if (particles.length > 200) {
        for (var i = 0; i < 20; i++) {
            particles.pop(particles[i])
        }
    }
}