module.exports = function() {

  // begin masonry grid
  $('.blog-grid').masonry({
    itemSelector: '.blog-grid__item  ',
    columnWidth: '.blog-grid__sizer',
    gutter: '.blog-grid__gutter-sizer',
    percentPosition: true
  });
  // end masonry grid

};