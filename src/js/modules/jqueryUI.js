module.exports = function () {

  // begin jqueryUI
    // begin range slider
    $( "#test-range-slider" ).slider({
      range: "max",
      min: 1,
      max: 5,
      value: 2,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    // end range slider
  // end jqueryUI

};