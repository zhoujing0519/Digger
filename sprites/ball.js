;(function(win){

  const RADIUS = 100
  const ball = new Sprite('ball', {
    paint(sprite, ctx){
      ctx.save()
      
      ctx.beginPath()
      ctx.arc(sprite.x, sprite.y, RADIUS, Math.PI * 2, false)
      ctx.clip()

      // 此处溢出的阴影会被clip掉
      ctx.shadowColor = 'rgb(0, 0, 0)'
      ctx.shadowOffsetX = -4
      ctx.shadowOffsetY = -4
      ctx.shadowBlur = 8

      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgb(100, 100, 195)'
      ctx.fillStyle = 'rgba(30, 144, 255, 0.15)'
      ctx.stroke()
      ctx.fill()

      ctx.restore()
    },
  })

  win.ball = ball

})(window)