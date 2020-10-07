module.exports = function() {

  // begin language switcher
  $('.burger-wrap').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $('#header__mobile-menu').toggleClass('active');
  });
  // end language switcher

};