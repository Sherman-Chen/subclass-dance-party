var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.$node.on('mouseover', () => {
    top = $('body').height() * Math.random() * .85 + 20;
    left = $('body').width() * Math.random() * .85;
    this.setPosition(top, left);
  });
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = BlinkyDancer;

ShyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};
ShyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    // content: 'url(\'http://bestanimations.com/Music/MirrorBalls/disco-dancing-animated-gif-5.gif\')',
    content: 'url(\'https://media.giphy.com/media/cimWVpEWU6DV6/giphy.gif\')',
    border: '0px'
  };
  position = {
    top: top,
    left: left,
    height: '150px',
    width: '150px',
  };
  this.$node.animate(position, 1000).css(styleSettings);
};