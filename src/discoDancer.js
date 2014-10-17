var DiscoDancer = function(top, left, timeBetweenSteps){
  ImgDancer.call(this, top, left, timeBetweenSteps);
  this._imgUrl = 'src/Discoball.png';
  this.refreshUrl(top, left);
  this.step();
};

DiscoDancer.prototype = Object.create(ImgDancer.prototype);
DiscoDancer.prototype.constructor = DiscoDancer;
DiscoDancer.prototype.step = function(){
  this.$node.mouseover(function(){
    if( !$(document.body).hasClass('back1') ){
      $(document.body).removeClass('back2');
      $(document.body).addClass('back1');
    }else{
      $(document.body).removeClass('back1');
      $(document.body).addClass('back2');
    }
  });
};
