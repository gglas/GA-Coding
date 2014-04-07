(function() { //protect the latlong

var geocoder;
      function initialize() {
      	geocoder = new google.maps.Geocoder();
      	geocoder.geocode( { 'address': $( "#address" ) }, 
      		function(results, status) {
      		var myLat = results[0].geometry.location.A;
      		var myLong = results[0].geometry.location.k;

      	});
      }

function codeAddress() {
    var address = document.getElementById("#address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

      initialize();

})();