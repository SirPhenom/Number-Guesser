jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww <= 320) {
      $("#trapezoid").removeClass("trapezoid");
    } else if (ww >= 321) {
      $("#trapezoid").addClass("trapezoid");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
