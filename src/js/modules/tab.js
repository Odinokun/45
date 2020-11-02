module.exports = function() {

  // begin language switcher
  $('.faq__hashtag').on('click', function(e) {
    e.preventDefault();

    $('.faq__hashtag').removeClass('active');
    $(this).addClass('active');
  });
  // end language switcher

};