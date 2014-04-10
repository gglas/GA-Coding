/*      function initialize() {
      	geocoder = new google.maps.Geocoder();
      	var userAddress = $( ".form-control" ).val();
		// set address equal to address put into form
      	geocoder.geocode( { 'address': userAddress }, 
      		function(results, status) {
      		var myLat = results[0].geometry.location.A; // set latitude variable
      		var myLong = results[0].geometry.location.k; // set longitude variable
      		})
      	if (status == google.maps.GeocoderStatus.OK) {
	      		// check google maps API query status
	      		// if status is OK post the latlong to server
	      		$_GET(
	      			"../php/api/index.php"
	      			,{ latValue : myLat }
	      			,{ longValue : myLong}
	      		);

	   //    		// parse factual API results into ingestible variables






	   //    		// add into proper div in slide 2 + style

	   	console.log();



	   //    		// switch to slide 2
	      	}
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
*/