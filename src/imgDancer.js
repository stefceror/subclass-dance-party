var ImgDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this._imgUrl = 'none';
  this._timeBetweenSteps = timeBetweenSteps;
};

ImgDancer.prototype = Object.create(Dancer.prototype);
ImgDancer.prototype.constructor = ImgDancer;
ImgDancer.prototype.oldStep = Dancer.prototype.step;
ImgDancer.prototype.refreshUrl = function(top, left){
  this.$node = $('<img class="imgDancer" src='+this._imgUrl+'></img>');
  this.setPosition(top, left);
};
