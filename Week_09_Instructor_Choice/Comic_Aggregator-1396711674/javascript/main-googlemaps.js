/* CURRENTLY IN: javascript/main.js */

(function(){ //Protect the maps!



      var geocoder;
      function initialize() {
      	geocoder = new google.maps.Geocoder();
      	geocoder.geocode( { 'address': '10 E 21st Street, New York'}, 
      		function(results, status) {
      		var myLat = results[0].geometry.location.A;
      		var myLong = results[0].geometry.location.k;

      		var mapOptions = {
	          center: new google.maps.LatLng(myLong, myLat),
	          zoom: 18
       	 	};
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

      	});
      }
        

      initialize();

})();