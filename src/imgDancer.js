var ImgDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('imgDancer');
  this._imgUrl = 'none';
  this._timeBetweenSteps = timeBetweenSteps;

};
ImgDancer.prototype = Object.create(Dancer.prototype);
ImgDancer.prototype.constructor = ImgDancer;
ImgDancer.prototype.oldStep = Dancer.prototype.step;
ImgDancer.prototype.step = function(){
  this.oldStep();
  if(this.$node.css('background-image') === 'none'){
    this.$node.css('background-image', 'url('+this._imgUrl+')');
  }else{
    this.$node.css('background-image', 'none');
  }
};
