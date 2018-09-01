;(function(win){

  'use strict'

  class PathPainter {
    constructor(){}
  
    paint(sprite, ctx){
      const {x, y, w, h} = sprite
  
      ctx.save()
  
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + w, 0)
      // ctx.lineTo(x + w, y + h)
      ctx.arcTo(x + w, y + h, x, y + h, w / 2)
      ctx.arcTo(x, y, x - w, y + h, w / 2)
      ctx.lineTo(x, y)
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.fill()
  
      ctx.restore()
    }
  }

  win.path = new Sprite('path', new PathPainter())

})(window)