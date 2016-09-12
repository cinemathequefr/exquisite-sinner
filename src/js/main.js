$(window).on("load", function () {
  var queue = []; // A queue of the shape(s) _to be opened_
  var $shape = null;
  var t;

  viewer.init();

  $("svg").on("click", function () { // Click anywhere in the svg (unless it's a shape -- see below)
    viewer.close();
  });


  $(".shape").on("click", function (e) {
    window.clearTimeout(t);
    if (($shape || $("")).is($(arguments[0].target)) === false) {
      queue.push($(arguments[0].target));
    } else {
      $shape.removeClass("on");
      $shape = null;
    }

    viewer.close(); // The only action here is to close the viewer (be it opened or not) -- the event handler will take care of opening the shape in queue
    e.stopPropagation();
  });

  viewer.on("viewer.close", function () {
    ($shape || $("")).removeClass("on");

    if (queue.length > 0) {
      $shape = queue.pop();
      $shape.addClass("on");

      $("#viewer").css({ "left": ($shape.data("pos") + "%") });

      viewer
      .content($shape.data("info"))
      .open();
    }
  });

  t = window.setTimeout(function () { // Autoplay hint
    $(".shape").each(function (i) {
      var $shape = $(this);
      window.setTimeout(function () {
        $shape.addClass("hover");
        window.setTimeout(function () {
          $shape.removeClass("hover");
      }, 350);
      }, (5 - i) * 700);
    });
  }, 500);

});
