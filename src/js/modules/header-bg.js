module.exports = function() {

  // begin header background
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });
  // end header background

};