var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._timeBetweenSteps = timeBetweenSteps;
  this._size = 10;
  this.step();
}

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.oldStep = Dancer.prototype.step;
GrowingDancer.prototype.step = function(){
  this.oldStep();
  if(this._size === 10){
    this._size = 25;
  }else{
    this._size = 10;
  }
  this.$node.css('border-radius',this._size+'px');
  this.$node.css('border',this._size+'px solid purple');
};
