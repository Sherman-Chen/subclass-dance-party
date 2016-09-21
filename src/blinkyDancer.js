// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};
BlinkyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    content: 'url(\'http://www.bitcandy.com/sites/default/files/pictures/70s-dance.gif\')',
  };
  var position = {
    top: top,
    left: left,
    height: '150px',
    width: '200px',
    border: '3px solid blue'
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings).animate(position, 1000);
};
// http://www.bitcandy.com/sites/default/files/pictures/70s-dance.gif


// var BlueDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.setPosition(top, left);
// };

// BlueDancer.prototype = Object.create(Dancer.prototype);
// BlueDancer.prototype.constructor = BlinkyDancer;

// BlueDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   // this.$node.fadeToggle('slow');
// };
// BlueDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     content: 'url(\'http://1.bp.blogspot.com/-c0uAfcGI5Hc/UUyKduJDPfI/AAAAAAAABN8/RAaOkSbmGmw/s1600/tumblr_mg9y63XtrS1qh59n0o1_250.gif\')',
//     top: top,
//     left: left,
//     border: '3px solid blue'
//   };
//   this.$node.css(styleSettings);
// };

// var GreenDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.setPosition(top, left);
// };
// GreenDancer.prototype = Object.create(Dancer.prototype);
// GreenDancer.prototype.constructor = BlinkyDancer;

// GreenDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   // this.$node.fadeToggle('slow');
// };
// GreenDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     content: 'url(\'https://67.media.tumblr.com/6f95f3af25301f13648109c3b1bf57a3/tumblr_ntid2aWiBL1taibz9o1_500.gif\')',
//     height: '200px',
//     width: '200px',
//     top: top,
//     left: left,
//     border: '0px'
//   };
//   this.$node.css(styleSettings);
// };


// var ShyDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.setPosition(top, left);
//   this.$node.on('mouseover', () => {
//     top = $('body').height() * Math.random();
//     left = $('body').width() * Math.random();
//     this.setPosition(top, left);
//   });
// };

// ShyDancer.prototype = Object.create(Dancer.prototype);
// ShyDancer.prototype.constructor = BlinkyDancer;

// ShyDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
// };
// ShyDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left,
//     height: '150px',
//     width: '200px',
//     content: 'url(\'http://bestanimations.com/Music/MirrorBalls/disco-dancing-animated-gif-5.gif\')',
//     border: '5px solid green'
//   };
//   this.$node.css(styleSettings);
// };