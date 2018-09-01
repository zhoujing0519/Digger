class Sprite {
  constructor(name, painter, behaviors = []){
    this.name = name
    this.painter = painter
    this.behaviors = behaviors

    this.x = 0
    this.y = 0
    this.w = 10
    this.h = 10
    this.vX = 0
    this.vY = 0
    this.visible = true
    this.animating = false
  }

  paint(ctx){
    if(this.painter !== undefined && this.visible){
      this.painter.paint(this, ctx)
    }
  }

  update(ctx, time){
    for(let i = 0, len = this.behaviors.length; i < len; i++){
      this.behaviors[i].execute(this, ctx, time)
    }
  }
}
