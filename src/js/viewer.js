


var viewer = (function () {
  var $viewer = $("#viewer");
  var $viewerContent;
  var $viewerClose;
  var isOpen = false;

  function init() {
    if ($viewer.length !== 1) {
      console.error("Initialization failed: a #viewer element must be present and unique");
      return;
    }

    // $viewer.append("<div class='viewerContent'></div><div class='viewerClose'></div>");
    $viewer.append("<div class='viewerContent'></div>");
    $viewerContent = $viewer.children(".viewerContent");
    // $viewerClose = $viewer.children(".viewerClose");
    $viewer.perfectScrollbar({
      suppressScrollX: true,
      wheelSpeed: 3
    });
    return this;
  }

  function on(event, callback) {
    $.subscribe(event, callback);
    return this;
  }

  function open() {
    if (isOpen === false) {
      $viewer
      .removeClass("fadeOutRight")
      .addClass("visible animated fadeInUp")
      .scrollTop(0).perfectScrollbar("update")
      .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        isOpen = true;
        $.publish("viewer.open");




        // $viewerClose.one("click", close);
      });
    }
    return this;
  }

  function close() {
    if (isOpen === true) {
      $viewer
      .removeClass("fadeInInUp")
      .addClass("fadeOutRight")
      .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        isOpen = false;
        $.publish("viewer.close");
      });
    } else {
      $.publish("viewer.close"); // The close event is published even when the viewer _was_ already closed
    }
    return this;
  }

  function content(html) {
    $viewerContent.empty().html(html);
    return this;
  }

  return {
    close: close,
    content: content,
    init: init,
    on: on,
    open: open,
    isOpen: function () { return isOpen; }
  };
})();