$(document).ready(function() {
  window.dancers = [];
  var paired = false;
  var discoBall = false;
  var fogMachine = false;
  var police = false;
  $('.fogMachine').on('click', function(event) {
    if (fogMachine === false) {
      var newFog = function() {
        var $body = $(document.body);
        var $fog = $('<div><img src="https://media.giphy.com/media/12JNYS1tkaIT2E/giphy.gif" class="fog"></div>');
        $body.append($fog);
      };
      newFog();
      // setTimeout(newFog, 1000);
      // setTimeout(newFog, 2000);
      // setTimeout(newFog, 3000);
      fogMachine = true;
    } else {
      fogMachine = false;
      $('.fog').remove();
    }
  });
  $('.shinyDiscoBall').on('click', function (event) {
    var particles = [];
    if (discoBall === false) { 
      console.log('disco ball on');
      discoBall = true;
      discoParticles = setInterval(function() {
        var particle = new Dancer(150, 900, 500);
        particles.push(particle);
        console.log(particle);
        var styleSettings = {
          top: 140,
          left: 0,
          border: '3px solid blue',
          'z-index': -1,
          opacity: 0.3
        };
        var color = Math.random();
        if (color < .25) {
          styleSettings.border = '3px solid blue';
        } else if (color < .5) {
          styleSettings.border = '3px solid green';
        } else if (color < .75) {
          styleSettings.border = '3px solid yellow';
        } else {
          styleSettings.border = '3px solid red';
        }

        styleSettings.left = $('body').width() / 2;
        var position = {};
        position.top = Math.random() * 300;
        position.left = Math.random() * 600 + ($('body').width() / 2 - 300); 
        
        $('body').append(particle.$node);
        particle.setPosition(1500, $('body').width() / 2);
        particle.$node.css(styleSettings).animate(position, 5000);
        setTimeout(function() {
          particles.unshift();
          particle.$node.remove();
        }, 4000);
      }, 1);
      discoParticles();
    } else {
      console.log('disco ball off');
      discoBall = false;
      clearInterval(discoParticles);
    }
    

  });
  $('.removeDancersButton').on('click', function(event) {
    $('.dancer').toggleClass('police');
    if (police) {
      $('.removeDancersButton').text('oh no, it\'s the police!');
      police = false;
    } else {
      police = true;
      $('.removeDancersButton').text('all clear!');      
    }
  });
  var randomize = function() {
    var top = 0;
    var left = 0;
    dancers.forEach(function(x) {
      top = $('body').height() * Math.random();
      left = $('body').width() * Math.random();
      x.setPosition(top, left);
    });
  };
  $('.pairs').on('click', function(event) {
    if ( paired === false) {
      dancers.forEach(function(x) {
        x.paired = false;
        x.pair = undefined;
      });
      var pairOne = dancers[Math.floor(Math.random() * dancers.length)];
      var pairTwo = dancers[Math.floor(Math.random() * dancers.length)];
      if (pairOne === pairTwo) {
        if (dancers.length > 1) {
          while (pairOne === pairTwo) {
            var pairTwo = dancers[Math.floor(Math.random() * dancers.length)];
          }
        }
      }
      pairOne.pair = pairTwo;
      pairTwo.pair = pairOne;
      pairOne.paired = true;
      pairTwo.paired = true;
      var top = ($('body').height() / 2) - 100;
      var left = ($('body').width() / 2) - 125;
      pairOne.setPosition(top, left);
      left = ($('body').height() / 2) + 125;
      pairTwo.setPosition(top, left);
      pairTwo.$node.toggleClass('mainDancer');
      pairOne.$node.toggleClass('mainDancer');
      dancers.forEach(function(x) {
        if (x.paired === false) {
          if ((Math.random() * 2) > 1) {
            top = $('body').height() * Math.random();
            left = $('body').width() * (Math.random() * .25 + .75);
            x.setPosition(top, left);
          } else {
            top = $('body').height() * Math.random();
            left = $('body').width() * Math.random() * .15;
            x.setPosition(top, left);
          }
          x.$node.toggleClass('supportingDancer');
        }
      });
      paired = true;
    } else {
      dancers.forEach(function (x) {
        if (x.paired === false) {
          x.$node.removeClass('supportingDancer');
        } else {
          x.$node.toggleClass('mainDancer');
        }
        x.paired = false;
        x.pair = undefined;
      });
      randomize();
      paired = false;
    }



    // window.dancers.forEach(function(dancer, i) {
    //   //find closest dancer to you
    //   var dist = [];
      
    //   if (dancer.pair === undefined) {
    //     dancers.forEach(function(pairing) {
    //       dist.push(Math.pow(dancer.top - pairing.top, 2) + Math.pow(dancer.left - pairing.left), 2);
    //     });

    //     var closest = dist.reduce(function(acc, cur, j) {
    //       if (cur < acc.dist && dancers[j].pair === undefined) {
    //         return {dist: cur, index: j};
    //       } 
    //       return acc;
    //     }, {dist: Number.MAX_SAFE_INTEGER, index: undefined});
    //     // window.dancers.forEach(function(x, j) {
    //     //   if (i !== j) {
    //     //     if (dist[j] < closest.dist && window.dancers[j].pair === undefined) {
    //     //       closest = {dist: dist[j], index: j};  
    //     //     }
    //     //   }
    //     // });
    //     if (closest.index !== undefined) {
    //       dancer.pair = window.dancers[closest.index];
    //       window.dancers[closest.index].pair = dancer;
    //     }
    //   }
    //     //set pairs
    
    // });
    

    // var rows = Math.ceil(Math.sqrt(window.dancers.length) / 2);
    // var nodes = [];      
    // var upperBound = $('body').height() * .1;
    // var lowerBound = $('body').height() * .75;
    // var leftBound = $('body').width() * .1;
    // var rightBound = $('body').width() * .75;
    
    // console.log(window.dancers);
    
    // for (var i = 0; i < rows; i++) {
    //   for (var j = 0; j < rows; j++) {
    //     nodes.push([(Math.floor(i % rows) * ((lowerBound - upperBound) / rows ) + upperBound), ((j % rows) * ((rightBound - leftBound) / rows) + leftBound)]);
    //   }
    // }
    // var pairCount = 0;
    // var top = 0;
    // var left = 0;
    // console.log(nodes);
    // dancers.forEach(function(dancer, i) {
    //   if (dancer.paired === false && dancer.pair !== undefined) {
    //     console.log(pairCount);
    //     top = nodes[pairCount][0];
    //     left = nodes[pairCount][1];
    //     dancer.setPosition(top, left);
    //     dancer.pair.setPosition.call(dancer.pair, top, left + 200);
    //     dancer.paired = true;
    //     dancer.pair.paired = true;
    //     pairCount++;
    //   }

    // //move to pairs
    // });

  });
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    if (police) {
      return false;
    }
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * .85 + 20,
      $('body').width() * Math.random() * .85,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $('.lineup').on('click', function(event) {
    window.dancers = window.dancers.sort(() => Math.random() * 10);
    var left = 100;
    var top = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      top = $('body').height() / window.dancers.length * i * .9;
      window.dancers[i].setPosition(top, left);
    }
  });
  shuffle = (arr) => {
    var newArr = arr.slice();
    var temp;
    var randomIndex = Math.floor(Math.random() * newArr.length);

    for (var i = 0; i < newArr.length; i++) {
      temp = newArr[i];
      newArr[i] = newArr[randomIndex];
      newArr[randomIndex] = temp;
    }

    return newArr;
  };
});