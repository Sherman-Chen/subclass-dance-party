//https://media.giphy.com/media/U2ivlljp6AvBK/giphy.gif
var DogDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.$node.on('mouseover', () => {
    console.log('mouseovered');
    let targetIndex = Math.floor(Math.random() * window.dancers.length);
    var target = window.dancers[targetIndex];
    var targetPosition = {};
    targetPosition.left = target.left;
    targetPosition.top = target.top;
    this.$node.animate(targetPosition, 5000);
    if (target !== this) {
      window.dancers.splice(targetIndex, 1);
      setTimeout(() => {
        target.$node.remove();
      }, 5000);
    }
  });
};
DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.fadeToggle('slow');
};
DogDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    content: 'url(\'https://media.giphy.com/media/U2ivlljp6AvBK/giphy.gif\')',
    height: '200px',
    width: '200px',
    top: top,
    left: left,
    border: '0px'
  };
  var position = {
    height: '200px',
    width: '120px',
    top: top,
    left: left,
    border: '0px'
  };
  this.top = top;
  this.left = left;
  this.$node.animate(position, 1500).css(styleSettings);
};