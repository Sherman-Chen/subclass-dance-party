var GreenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};
GreenDancer.prototype = Object.create(Dancer.prototype);
GreenDancer.prototype.constructor = BlinkyDancer;

GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.fadeToggle('slow');
};
GreenDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    content: 'url(\'https://67.media.tumblr.com/6f95f3af25301f13648109c3b1bf57a3/tumblr_ntid2aWiBL1taibz9o1_500.gif\')',

  };
  var position = {
    height: '200px',
    width: '200px',
    top: top,
    left: left,
    border: '0px'
  };
  this.top = top;
  this.left = left;
  this.$node.animate(position, 1500).css(styleSettings);
};