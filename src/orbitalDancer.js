var OrbitalDancer = function(top, left, timeBetweenSteps){
  ImgDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('orbit');
  this._imgUrl = 'src/uranus.png'
  this._nearest = undefined;
  this.step();
  this._midPoint;
};

OrbitalDancer.prototype = Object.create(ImgDancer.prototype);
OrbitalDancer.prototype.constructor = OrbitalDancer;
// OrbitalDancer.prototype.step = function(){
//   this.oldStep();
//   if(this._nearest === undefined){
//     var smallest = 9999999;
//     for(var i = 0; i < window.dancers.length; i++){
//       var distance = Math.sqrt( Math.abs(this.pos[0] - window.dancers[i].pos[0]) + Math.abs(this.pos[1] - window.dancers[i].pos[1]) );
//       if(distance < smallest){
//         smallest = distance;
//         this._nearest = window.dancers[i];
//       }
//     }
//     this._midPoint = [Math.abs(this.pos[0]-this._nearest.pos[0]/2),Math.abs(this.pos[1]-this._nearest.pos[1]/2)]
//   }
//   var currentPos = [this.$node.css('top'), this.$node.css('left')];
//   if(currentPos[0] === this.pos[0] && currentPos[1] === this.pos[1]){
//     this.$node.css('top', this._midpoint[0]+'px');
//     this.$node.css('left', this._midpoint[1]+'px');
//   }else{
//     this.$node.css('top', this.pos[0]+'px');
//     this.$node.css('left', this.pos[1]+'px');
//   }

// };
