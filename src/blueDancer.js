var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlinkyDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.fadeToggle('slow');
};
BlueDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    content: 'url(\'http://1.bp.blogspot.com/-c0uAfcGI5Hc/UUyKduJDPfI/AAAAAAAABN8/RAaOkSbmGmw/s1600/tumblr_mg9y63XtrS1qh59n0o1_250.gif\')',
    top: top,
    left: left,
    border: '3px solid blue'
  };
  this.$node.css(styleSettings);
};