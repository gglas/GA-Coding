(function(){


// activate pages function
$(document).ready(function() {
    $.fn.fullpage();
    //execute fullpage javascript

    $( '#submit_btn' ).click(function(){
   //define submit button click handler
  function initialize() {
      	geocoder = new google.maps.Geocoder();
      	var userAddress = $( ".form-control" ).val();
		// set address equal to address put into form
      	geocoder.geocode( { 'address': userAddress }, 
      		function(results, status) {
      		var myLat = results[0].geometry.location.A; // set latitude variable
      		var myLong = results[0].geometry.location.k; // set longitude variable
      		})
      		console.log( myLat );
  //   	$.GET(
		// 	"../php/api/index.php"
		// 	,{ latValue : myLat }
		// 	,{ longValue : myLong }
		// 	, function( data ) {
		// 		$(".result").html(data);
		// 	}
		// )
    	
    		};
    	})

	})

// Close off the anonymous function and execute it
})();