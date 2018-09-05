// This is a jQuery "ready" closure:
jQuery(function() { //less characters than the $(document).ready(function){})
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // I'll do some of the work for you, first I will grab the <body></body>
  var $body = $('body');

  // Create a <div> with the class "duck" and name it "duck"
  var $duck = $('<div>').addClass('duck').appendTo($body);

  // 1. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  setInterval(function(){
    // Hint: use the toggleClass() method in jquery!
  }, 250);

  // 2. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  // Hint: use the .css() method in jQuery!


  // 3. Try making the duck move to a different location after 1 second
  // Hint: look up the .animate() method in jQuery!



  // 4. Congratulations!
});
