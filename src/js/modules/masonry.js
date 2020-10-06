module.exports = function() {

  // begin masonry grid

  // begin BLOG grid
  $('.blog-grid').masonry({
    itemSelector: '.blog-grid__item  ',
    columnWidth: '.blog-grid__sizer',
    gutter: '.blog-grid__gutter-sizer',
    percentPosition: true
  });
  // end BLOG grid

  // begin STORIES grid
  $('.stories-grid').masonry({
    itemSelector: '.stories-grid__item  ',
    columnWidth: '.stories-grid__sizer',
    gutter: '.stories-grid__gutter-sizer',
    percentPosition: true
  });
  // end STORIES grid

  // end masonry grid

};