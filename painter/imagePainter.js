/**
 * @desc 图像绘制器
 * @param {String} imageUrl 图片路径
 */
class ImagePainter {
  constructor(imageUrl){
    this.image = new Image()
    this.image.src = imageUrl
  }

  /**
   * @desc 绘制方法
   * @param {Object} sprite 精灵对象实例 
   * @param {Object} ctx canvas绘制上下文
   */
  paint(sprite, ctx){
    if(this.image.complete){
      ctx.drawImage(this.image, sprite.x, sprite.y, sprite.w, sprite.h)
    }
  }
}