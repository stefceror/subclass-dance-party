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
  this.$node.toggle();

  // if(this.$node.css('background-image') === 'none'){
  //   this.$node.css('background-image', 'url('+this._imgUrl+')');
  // }else{
  //   this.$node.css('background-image', 'none');
  // }
};
