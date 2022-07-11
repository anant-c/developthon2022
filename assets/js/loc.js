var GoogleMaps = {
  
  options: null,
  map: null,
  
  init: function(latitude, longitude, zoom, element) {
    this.options = {
      center: new window.google.maps.LatLng(latitude, longitude),
      zoom: zoom,
/*      enableHighAccuracy: true,
      maximumAge: 5000, // cache for 5 seconds
      timeout: 15000, // timeout in 15 seconds*/
    };
    
    this.map = new window.google.maps.Map(document.getElementById(element), this.options );
  }, // GoogleMaps.init()
  
};

var GoogleMapDisplay = {
  
  init: function(zoom, element) {
    navigator.geolocation.getCurrentPosition(function(position){
      var accuracy = position.coords.accuracy;
      if ( accuracy > 80 ) {
        zoom -= Math.round(Math.log(accuracy/50)/Math.LN2);
      }
      
      window.google.maps.event.addDomListener(window, 'load', GoogleMaps.init(
        position.coords.latitude,
        position.coords.longitude,
        zoom,
        element
      ));
    });
  }, // GoogleMapDisplay.init()

};

if ( "geolocation" in navigator ) {
  // GoogleMapDisplay.init( zoom, element.ID );
  // <div id="map" />
  GoogleMapDisplay.init(18, 'map');
}
else {
  alert('Geolocation is not supported!');
}
