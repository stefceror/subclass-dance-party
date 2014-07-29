var OrbitalDancer = function(top, left, timeBetweenSteps){
  ImgDancer.call(this, top, left, timeBetweenSteps);
  this._imgUrl = 'src/uranus.png';
  this._nearest = undefined;
  this.step();
};

OrbitalDancer.prototype = Object.create(ImgDancer.prototype);
OrbitalDancer.prototype.constructor = OrbitalDancer;
OrbitalDancer.prototype.step = function(){
  this.oldStep();
  if(this._nearest === undefined){
    var smallest = 9999999;
    for(var i = 0; i < window.dancers.length; i++){
      var distance = Math.sqrt( Math.abs(this.pos[0] - window.dancers[i].pos[0]) + Math.abs(this.pos[1] - window.dancers[i].pos[1]) );
      if(distance < smallest){
        smallest = distance;
        this._nearest = window.dancers[i];
      }
    }
    if(this._nearest.pos[1] - this.pos[1] > 0){
      this.refreshUrl(this.pos[0], this.pos[1], 'orbitRight');
    }else{
      this.refreshUrl(this.pos[0], this.pos[1], 'orbitLeft');
    }
  }
};
OrbitalDancer.prototype.refreshUrl = function(top, left, cssClass){
  this.$node = $('<img class="imgDancer" src='+this._imgUrl+'></img>');
  this.$node.addClass(cssClass);
  this.setPosition(top, left);
};
