var PizzaDancer = function (top, left, timeBetweenSteps) {
  ImgDancer.call(this, top, left, timeBetweenSteps);
  this._imgUrl = 'src/pizza_transparent.png';
  this.refreshUrl(top, left);
  this.step();
};

PizzaDancer.prototype = Object.create(ImgDancer.prototype);
PizzaDancer.prototype.constructor = PizzaDancer;
PizzaDancer.prototype.step = function(){
  this.oldStep();
  if(!this.$node.hasClass('congaLine')){
    this.$node.toggle();
  }
};
