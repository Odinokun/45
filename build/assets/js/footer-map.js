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