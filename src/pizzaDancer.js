var PizzaDancer = function (top, left, timeBetweenSteps) {
  ImgDancer.call(this, top, left, timeBetweenSteps);
  this._imgUrl = 'src/pizza_transparent.png';
  this.step();
}

PizzaDancer.prototype = Object.create(ImgDancer.prototype);
PizzaDancer.prototype.constructor = PizzaDancer;
