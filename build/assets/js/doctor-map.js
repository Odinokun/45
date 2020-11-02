let docMarker = [
  [55.80592, 38.50325]
];

let centerMap; //центр карты при загрузке

if($(document).width() > 1100){
  centerMap = [[55.81145, 37.62272]];
} else {
  centerMap = docMarker;
}

let docMap = {};

function initializeDocMap() {
  let mapDiv = document.getElementById("doctor-map");
  let image = "assets/img/marker.svg";

  docMap = new google.maps.Map(mapDiv, {
    zoom: 9,
    disableDefaultUI: false,
    scrollwheel: false,
    center: new google.maps.LatLng(centerMap[0][0], centerMap[0][1]),
    styles: [{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#d3d3d3"}]},{"featureType": "transit","stylers": [{"color": "#808080"},{"visibility": "off"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"visibility": "on"},{"color": "#b3b3b3"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"weight": 1.8}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"color": "#d7d7d7"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#ebebeb"}]},{"featureType": "administrative","elementType": "geometry","stylers": [{"color": "#a7a7a7"}]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"visibility": "on"},{"color": "#efefef"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#696969"}]},{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"visibility": "on"},{"color": "#737373"}]},{"featureType": "poi","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{"color": "#d6d6d6"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#dadada"}]}]
  });

  $.each(docMarker, function(index, val) {
    let myLatLng = new google.maps.LatLng(val[0], val[1]);
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: docMap,
      icon: image
    });
  });
}

google.maps.event.addDomListener(window, "load", initializeDocMap);