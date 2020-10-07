module.exports = function() {

  // begin Slick slider

  $('#top-section__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M6.173.33L.55 5.952c-.44.439-.44 1.15 0 1.59l5.623 5.623a1.125 1.125 0 0 0 1.59-1.59L4.06 7.872h27.036a1.125 1.125 0 0 0 0-2.249H4.06L7.763 1.92a1.121 1.121 0 0 0 0-1.59 1.125 1.125 0 0 0-1.59 0z\"/></g></g></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M26.33 13.166l5.623-5.623c.439-.44.439-1.151 0-1.59L26.33.329a1.125 1.125 0 0 0-1.59 1.59l3.702 3.704H1.407a1.125 1.125 0 0 0 0 2.25h27.035l-3.703 3.703a1.121 1.121 0 0 0 0 1.59c.44.44 1.151.44 1.59 0z\"/></g></g></svg></div>"
  });

  $('#doctor-reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: false,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M6.173.33L.55 5.952c-.44.439-.44 1.15 0 1.59l5.623 5.623a1.125 1.125 0 0 0 1.59-1.59L4.06 7.872h27.036a1.125 1.125 0 0 0 0-2.249H4.06L7.763 1.92a1.121 1.121 0 0 0 0-1.59 1.125 1.125 0 0 0-1.59 0z\"/></g></g></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M26.33 13.166l5.623-5.623c.439-.44.439-1.151 0-1.59L26.33.329a1.125 1.125 0 0 0-1.59 1.59l3.702 3.704H1.407a1.125 1.125 0 0 0 0 2.25h27.035l-3.703 3.703a1.121 1.121 0 0 0 0 1.59c.44.44 1.151.44 1.59 0z\"/></g></g></svg></div>"
  });

  // end Slick slider

};