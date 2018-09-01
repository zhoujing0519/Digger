;(function(win){

  'use strict'

  class BgImagePainter extends ImagePainter {
    constructor(bgUrl){
      super(bgUrl)
    }
    
    /**
     * @desc 绘制方法
     * @param {Object} sprite 精灵对象实例 
     * @param {Object} ctx canvas绘制上下文
     */
    paint(sprite, ctx){
      if(this.image.complete){
        ctx.drawImage(this.image, sprite.x, sprite.y, sprite.w, sprite.h)
        ctx.drawImage(this.image, sprite.x, sprite.y + sprite.h, sprite.w, sprite.h)
      }
    }
  }
  
  const bgUrl = './sprites/bg/bg.jpg'
  const bgImagePainter = new BgImagePainter(bgUrl)
  const bgBehaviors = [
    {
      lastMove: 0,
      execute: function(sprite, ctx, time){
        if(!this.lastMove !== 0){
          sprite.y -= sprite.vY * ((time - this.lastMove) / 1000)

          if(sprite.y < -sprite.h){
            sprite.y = 0
          }
        }
        this.lastMove = time
      },
    },
  ]
  const bg = new Sprite('bg', bgImagePainter, bgBehaviors)

  win.bg = bg

})(window)