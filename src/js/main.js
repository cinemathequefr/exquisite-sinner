

$(window).on("load", function () {
  $(".shape").on("click", function () {
    $(".infobox.visible").attr("class", "infobox");
    window.setTimeout(function () {
      $(".infobox").addClass("visible animated rubberBand");
    }, 100)
  });

});




/*
  $(".shape")
  .on("mouseover", function () {
    $(".infobox").addClass("visible");
  })
  .on("mouseout", function () {
    $(".infobox").removeClass("visible");
  });

  $("body")
  .on("mouseout", function () {
    $(".shape").each(function (i) {
      var $this = $(this);
      window.setTimeout(function () {
        $this.addClass("on");
      }, (250 * i));
      window.setTimeout(function () {
        $this.removeClass("on");
      }, (300 * (i + 1)));
    });
  })
  .on("mousover", function () {
    $(".shape").removeClass("on");
  });
*/
