/* CURRENTLY IN: javascript/main.js */

(function(){ //protect the pizza!


// activate pages function 
	$(document).ready(function() {
		$.fn.fullpage();
		});


var submitBtn = $( '#submit_btn' );
// pull in submit button
	
// define google maps geocoding  (from google maps API)
var geocoder;

// define geocoder variable
      


      function initialize() {
      	geocoder = new google.maps.Geocoder();
      	var userAddress = $( ".form-control" ).val();
		// set address equal to address put into form
      	geocoder.geocode( { 'address': userAddress }, 
      		function(results, status) {
      		var myLat = results[0].geometry.location.A; // set latitude variable
      		var myLong = results[0].geometry.location.k; // set longitude variable
      		var latLong = myLat+','+myLong;
      		console.log( latLong );
      		})
      	if (status == google.maps.GeocoderStatus.OK) {
	      		// check google maps API query status
	      		// if status is OK query factual API
	      		function queryFactual( fullCoord ) {
				var url = 'http://api.v3.factual.com/t/restaurants-us?q=taco&geo={"$circle":{"$center":'+ latLong +',"$meters": 1000}}&offset=0&limit=3&include_count=false&sort=placerank:desc'
	      		}
	   //    		// parse factual API results into ingestible variables






	   //    		// add into proper div in slide 2 + style





	   //    		// switch to slide 2
	   //    	}
	   //    		// if bad google API response, display error div
	   //    	else {
	   //    		$( '.form-control' ).removeAttr( 'id','focusedInput' );
	   //    		$( '.form-control' ).attr('id','input-error');
	   //    		$( '.form-group' ).addClass( 'has-error' );

	      			

	   //    	}
      	};


submitBtn.on(
		'click'
		,initialize
	);
})();