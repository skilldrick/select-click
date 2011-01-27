(function ($) {
  $.fn.selectClick = function (selectCallback, clickCallback, clickTolerance) {
    var prevX = 0,
        prevY = 0,
        clickTolerance = clickTolerance || 2;

    this.mousedown(function (e) {
      prevX = e.pageX;
      prevY = e.pageY
    });

    return this.click(function (e) {
      var dx = Math.abs(e.pageX - prevX);
      var dy = Math.abs(e.pageY - prevY);
      if (dx < clickTolerance && dy < clickTolerance) {
        clickCallback && clickCallback();
      }
      else {
        selectCallback && selectCallback();
      }
    });
  };

})(jQuery);
