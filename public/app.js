$(document).ready(function() {
  // Homepage Typewriter
  var app = document.getElementById('title');

  var typewriter = new Typewriter(app, {
    loop: false
  });

  typewriter.typeString("Hi there! I'm Geanie. \n How can I help you? ")
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
