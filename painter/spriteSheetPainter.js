class SpriteSheetPainter {
  constructor(spritesheet, cells = []){
    this.spritesheet = spritesheet
    this.cells = cells
    this.cellIndex = 0
  }

  advance(){
    if(this.cellIndex === this.cells.length - 1){
      this.cellIndex = 0
    }else{
      this.cellIndex++
    }
  }

  paint(sprite, ctx){
    const cell = this.cells[this.cellIndex]

    ctx.drawImage(this.spritesheet, 
      cell.x, cell.y, cell.w, cell.h,
      sprite.x, sprite.y, cell.w, cell.h  
    )
  }
}