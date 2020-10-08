$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin Slick slider
  require('./modules/slick')();

  // begin masonry grid
  require('./modules/masonry')();

  // begin language switcher
  require('./modules/lang')();

  // begin burger
  require('./modules/burger')();

  // begin jqueryUI
  require('./modules/jqueryUI')();


  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Popup
  require('./modules/popup')();

});