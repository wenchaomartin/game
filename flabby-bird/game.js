//setup 
let canvas = document.getElementById('id-canvas')
let ctx = canvas.getContext('2d')

let volecity = 0

canvas.width = 600
canvas.height = 400
let spaceDown = false
let hug = 0
let gameSpeed = 2


function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bird.update()
    bird.draw()
    handleParticles()
    hug ++
    requestAnimationFrame(animation)
   

}

animation()

window.addEventListener('keydown',function(event){
    if(event.code === 'Space'){
       spaceDown = true
    }
})

window.addEventListener('keyup',function(event){
    if(event.code === 'Space'){
       spaceDown = false
    }
})