//setup 
let canvas = document.getElementById('id-canvas')
let ctx = canvas.getContext('2d')

let volecity = 0

canvas.width = 2037
canvas.height = 768
let spaceDown = false
let hug = 0
let frame = 0 
let gameSpeed = 2
let score = 0 

let backgroundImg = new Image()
backgroundImg.src = "img/background.png"
let background = new Backgroud(backgroundImg);

const point = document.createElement('audio')
point.src = 'music/point.wav'
const hit = document.createElement('audio')
hit.src = 'music/hit.wav'

const swooshing = document.createElement('audio')
swooshing.src = 'music/swooshing.wav'

const die = document.createElement('audio')
die.src = 'music/die.wav'





function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    background.update()
    bird.update()
   
    bird.draw()
    swooshing.play()
    handleParticles()
    hug ++
    frame ++
    handleObstacles()
    countScore(score)
    ctx.font = "100px Arial";
   
    ctx.fillText(score,canvas.width-200,100)
    if(collision()){
        hit.play()
        ctx.save()
        ctx.fillStyle='yellow'
        ctx.font = "small-caps 200px Times New Roman";
        ctx.fillText("game over ", canvas.width/3, canvas.height/2);
        die.play()
        ctx.restore()

        return
    }
   
    requestAnimationFrame(animation)
   

}
 window.addEventListener("load",animation())


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

window.addEventListener('keyup',function(event){
    if(event.code === 'Enter'){
        console.log(event)
       bird = new Bird(); 
       obstacles =[]
       score =0 
       animation()
    }
})

function collision(){
    for(var i=0;i<obstacles.length;i++){
        if(bird.x<obstacles[i].x+obstacles[i].width && bird.x+bird.width>obstacles[i].x+gameSpeed+1){
            if(bird.y<obstacles[i].y+obstacles[i].top && bird.y+bird.height>obstacles[i].y){
                console.log("conllision")
                return true
            }
            if(bird.y+bird.height > canvas.height - obstacles[i].bottom){
                console.log("conllsion")
                return true
            }
        }
    }
}

function countScore(){
    for(var i=0;i<obstacles.length;i++){
        if(obstacles[i].counted===false && bird.x > obstacles[i].x ){
            point.play()
            score++
            
            obstacles[i].counted=true
        }
    }
}

