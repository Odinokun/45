// BEGIN Temp navigation menu for development
// should be commented before production

$(document).ready(function ($) {
  pageWidget([
    'index',
    'inner'
    ]);
});

function pageWidget(pages) {
  let widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (let i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  let widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Temp navigation menu for development
// should be commented before production


//====== Begin Programmer code ======


let coords = [
  [55.81145, 37.62272] //центр карты при загрузке
];

let markers = [
  [55.79093, 37.60345],
  [55.88549, 37.43702],
  [55.88549, 37.83702],
  [55.79264, 37.37733],
  [55.70592, 37.40325],
  [55.79264, 37.77733],
  [55.70592, 37.80325],
  [55.67297, 37.58352]
];

let map = {};

function initialize() {
  let mapDiv = document.getElementById("map");
  let image = "assets/img/marker.svg";

  map = new google.maps.Map(mapDiv, {
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: false,
    center: new google.maps.LatLng(coords[0][0], coords[0][1]),
    styles: [{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#d3d3d3"}]},{"featureType": "transit","stylers": [{"color": "#808080"},{"visibility": "off"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"visibility": "on"},{"color": "#b3b3b3"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"weight": 1.8}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"color": "#d7d7d7"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#ebebeb"}]},{"featureType": "administrative","elementType": "geometry","stylers": [{"color": "#a7a7a7"}]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#efefef"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#696969"}]},{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"visibility": "on"},{"color": "#737373"}]},{"featureType": "poi","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{"color": "#d6d6d6"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#dadada"}]}]
  });

  $.each(markers, function(index, val) {
    let myLatLng = new google.maps.LatLng(val[0], val[1]);
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  });
}
google.maps.event.addDomListener(window, "load", initialize);