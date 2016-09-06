$(window).on("load", function () {

  var $activeShape = $("");


  var w = $("svg").eq(0).width();



  viewer.init();


  $(".shape").on("click", viewerTrigger);




  function viewerTrigger () {
    $activeShape.removeClass("on");
    $activeShape = $(arguments[0].target);
    $activeShape.addClass("on");


    console.log($activeShape.offset().left);

    function viewerOpen() {
      viewer.content($activeShape.data("info"));
      viewer.open();
    }

    if (viewer.isOpen() === true) {
      viewer.close();
      viewer.on("viewer.close", viewerOpen);
    } else {
      viewerOpen();
    }

  }

});
