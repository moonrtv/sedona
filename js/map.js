function initialize() {
  var mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(34.8491662,-111.7484466)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  var myLatLng = new google.maps.LatLng(34.8491662,-111.7484466);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);