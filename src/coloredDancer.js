var ColoredDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._timeBetweenSteps = timeBetweenSteps;
  this._colors = ['orange','blue','green'];
  this.step();
};

ColoredDancer.prototype = Object.create(Dancer.prototype);
ColoredDancer.prototype.constructor = ColoredDancer;
ColoredDancer.prototype.oldStep = Dancer.prototype.step;
ColoredDancer.prototype.step = function (){
  this.oldStep();
  var color = this._colors[Math.floor(Math.random()*3)];
  this.$node.css('border', '10px solid ' + color);
}
