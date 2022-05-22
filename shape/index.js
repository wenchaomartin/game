window.addEventListener("load", function () {
    let canvas = document.getElementById('id-canvas')
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight 
    let context = canvas.getContext('2d')
    
    let size = canvas.width *0.1
   
    const maxLevel = 4
    const branch = 2
    let scale = 0.5
    let spread = 0.5
    let slide = 5
    context.lineWidth = Math.floor(Math.random()*40+10)
    let color = "hsla("+Math.random()*360+",100%,50%)"
   
    
    context.lineCap = 'round'
    context.shadowColor = 'rgba(0, 0, 0, 0.7)'
    context.shadowOffsetX = 10
    context.shadowOffsetY = 10
    context.shadowBlur = 5

    let resizeButton=document.getElementById('resize')
    resizeButton.style.backgroundColor = color
    resizeButton.addEventListener("click",resize)

    spreadRange = this.document.getElementById("spread")
    label = this.document.getElementById("id-label")
    spreadRange.addEventListener("change",function(e){
        spread = e.target.value
        context.lineWidth = Math.floor(Math.random()*40+10)
        label.textContent = "spread=" + spread
        drawFractical()
    })


    function drawBranch(level) {
        if (level > maxLevel) return
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(size, 0)
        context.stroke()
        for (var i = 0; i < branch; i++) {
            context.save()
            context.translate(size - (size / branch) * i, 0)
            context.scale(scale, scale)
            context.rotate(spread * -1)
            drawBranch(level + 1)
            context.restore()


            context.save()
            context.translate(size - (size / branch) * i, 0)
            context.scale(scale, scale)
            context.rotate(spread)
            drawBranch(level + 1)
            context.restore()
        }
    }

    // drawBranch(0)
    function drawFractical() {
        context.clearRect(0, 0,canvas.width, canvas.height)
        context.save()
        context.strokeStyle = color
        context.translate(canvas.width / 2, canvas.height / 2)
        for (var i = 0; i < slide; i++) {
            context.beginPath()
            context.rotate(2 * Math.PI / slide)
            context.moveTo(0, 0)

            context.lineTo(size, 0)
            context.stroke()
            drawBranch(0)
        }
        context.restore()
    }

    drawFractical()

    function resize(){
    
         scale = Math.random()*0.2 + 0.4
         spread =  Math.random() *2.9 +0.1
         slide =  Math.random()*7+2
         color = "hsl("+Math.random()*360+",100%,50%)"
         resizeButton.style.backgroundColor = color
         context.lineWidth = Math.floor(Math.random()*40+10)
         drawFractical()

    }
  
    
})