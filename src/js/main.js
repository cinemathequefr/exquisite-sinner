$(window).on("load", function () {
  var queue = []; // A queue of the shape(s) _to be opened_
  var $shape = null;
  // var w = $("svg").eq(0).width();

  viewer.init();

  $(".shape").on("click", function () {
    queue.push($(arguments[0].target));
    viewer.close(); // The only action here is to close the viewer (be it opened or not) -- the event handler will take care of opening the shape in queue
  });

  viewer.on("viewer.close", function () {
    ($shape || $("")).removeClass("on");

    if (queue.length > 0) {
      $shape = queue.pop();
      $shape.addClass("on");

      viewer
      .content($shape.data("info"))
      .open();
    }
  });

});
