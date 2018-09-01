function Hamster(opts){
  this.x = opts.x || 0
  this.y = opts.y || 0
  this.size = opts.size || 100
  this.color = opts.color || 'pink'
}

Hamster.prototype.draw = function(ctx){
  ctx.save()

  ctx.translate(this.size, this.size)
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
  ctx.fillStyle = this.color
  ctx.fill()

  ctx.restore()
}

Hamster.prototype.moveToLeft = function(){
  this.x = 0
}

Hamster.prototype.moveToRight = function(){
  this.x = this.size * 2
}

Hamster.prototype.update = function(step){
  if(this.x > this.size * 2 || this.x < 0) return

  this.x += step
  if(step > 0){
    this.x = Math.min(this.x, this.size * 2)
  }else{
    this.x = Math.max(this.x, 0)
  }
}