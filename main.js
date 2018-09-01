;(function(win, doc){

  'use strict'

  const cvs = doc.getElementById('cvs')
  const ctx = cvs.getContext('2d')
  let lastTime = null

  cvs.width = win.innerWidth * dpr
  cvs.height = win.innerHeight * dpr

  ball.x = cvs.width / 2
  ball.y = 200
  ball.w = 200
  ball.h = 200

  path.x = ball.x - ball.w / 2
  path.y = 0
  path.w = ball.w
  path.h = ball.y + ball.h

  star.x = 100
  star.y = 200
  star.w = 100
  star.h = 100

  bg.x = 0
  bg.y = 0
  bg.vY = 400
  bg.w = cvs.width
  bg.h = cvs.height

  ;(function animate(time = 0){
    if(!lastTime){
      lastTime = time
    }

    ctx.clearRect(0, 0, cvs.width, cvs.height)
    if(time - lastTime > 83){
      star.painter.advance()
      
      lastTime = time
    }
    bg.paint(ctx)
    bg.update(ctx, time)
    star.paint(ctx)
    path.paint(ctx)
    ball.paint(ctx)

    requestAnimationFrame(animate)
  })()

  cvs.addEventListener('touchmove', EventUtils.prevent, false)

})(window, document)