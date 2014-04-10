(function(){


// activate pages function
$(document).ready(function() {
    $.fn.fullpage();

    $( '#submit_btn' ).click(function() {

        // var latitude = 40.7502538;
        // var longitude = -73.9813427;

        var userAddress = $( ".form-control" ).val();

        geocoder = new google.maps.Geocoder();

        // set address equal to address put into form
        geocoder.geocode({ 'address': userAddress }, function(results, status) {
            var myLat = results[0].geometry.location.k; // set latitude variable
            var myLong = results[0].geometry.location.A; // set longitude variable
            console.log( results );

	        $.get("/php/api/index.php", {'lat': myLat, 'long': myLong})
	        .done(function(data) {
	            console.log(data);
	        });


        });



    });

});

// Close off the anonymous function and execute it
})();