$(document).ready(function() {
  var app = document.getElementById('title');

  var typewriter = new Typewriter(app, {
    loop: false
  });


  typewriter.typeString(`Hi there! I'm Geanie... How can I help you? `)
    .pauseFor(1000)
    .start();
});

$(function() {
  $('[data-toggle="popover"]').popover({
    container: 'body',
    trigger: 'hover',
    boundary: 'scrollParent'
  })
});