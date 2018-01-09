// function lineOne(){
//   var app = document.getElementById('line1');
//   var typewriter = new Typewriter(app, {
//     loop: false
//   });
//   typewriter.typeString(`Hi there! I'm Geanie. `)
//     .pauseFor(1000)
//     .start();
// }
//
// function lineTwo(){
//   var app = document.getElementById('line2');
//   var typewriter = new Typewriter(app, {
//     loop: false
//   });
//   typewriter.typeString(`How can I help you? `)
//     .pauseFor(1000)
//     .start();
// };

$(document).ready(function() {

  // lineOne();
  // lineTwo();

  // Homepage Typewriter
  var app = document.getElementById('title');

  var typewriter = new Typewriter(app, {
    loop: false
  });

  typewriter.typeString("Hi there! I'm Geanie. \n How can I help you?")
    .pauseFor(1000)
    .start();

  //Homepage Popovers
  $(function() {
    $('[data-toggle="popover"]').popover({
      container: 'body',
      trigger: 'hover',
      boundary: 'scrollParent'
    })
  });

});
