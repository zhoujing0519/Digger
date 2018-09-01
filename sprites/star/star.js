;(function(win){

  'use strict'

  const starSpriteSheet = new Image()
  const cells = [
    {x: 0, y: 0, w: 80, h: 80},
    {x: 80, y: 0, w: 80, h: 80},
    {x: 160, y: 0, w: 80, h: 80},
    {x: 240, y: 0, w: 80, h: 80},
    {x: 320, y: 0, w: 80, h: 80},
    {x: 400, y: 0, w: 80, h: 80},
    {x: 480, y: 0, w: 80, h: 80},
    {x: 560, y: 0, w: 80, h: 80},
    {x: 640, y: 0, w: 80, h: 80},
    {x: 720, y: 0, w: 80, h: 80},
    {x: 800, y: 0, w: 80, h: 80},
    {x: 880, y: 0, w: 80, h: 80},
    {x: 960, y: 0, w: 80, h: 80},
    {x: 1040, y: 0, w: 80, h: 80},
    {x: 1120, y: 0, w: 80, h: 80},
  ]
  const starSpriteSheetPainter = new SpriteSheetPainter(starSpriteSheet, cells)
  const star = new Sprite('star', starSpriteSheetPainter)

  starSpriteSheet.src = './sprites/star/starSpriteSheet.png'

  win.star = star

})(window)