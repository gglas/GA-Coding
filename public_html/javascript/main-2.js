(function(){

function testPageBounds() {
    var heightOfTron = $( '#tacoResults' ).height();
    var winHeight = $( window ).height();

    if ( winHeight < heightOfTron ) {
        $( 'body' ).css( 'overflow', 'scroll' );
    }
}


// javascript for when the user uses the location button

function showPosition( position ) {
        $.get(
            "/php/api/index.php"
            , {
                'lat': position.coords.latitude
                , 'long': position.coords.longitude
            }
        ).done(
            function( data ) {
                data = JSON.parse( data );
                console.log(data);

                var template = $("#resultsList").html();
                $("#tacoResults").html(_.template(template,{items:data}));
                $.fn.fullpage.moveTo(0, 1); 
                $('#ajaxloader1').remove();
           }
        );
}

function isLocationSupported() {
    if ( navigator.geolocation ) {
        $('.geolocate-button').removeClass('input-hide');


        $('#geolocate_btn').click(function( e ){
            var position = navigator.geolocation.getCurrentPosition(showPosition);
        })
    }
}
isLocationSupported();

// activate pages function
$(document).ready(function() {
    $.fn.fullpage();

    $( '#submit_btn' ).click(function() {

        $( this ).attr( 'disabled', 1 );

        // var latitude = 40.7502538;
        // var longitude = -73.9813427;


// when user uses the input field
        var userAddress = $( ".form-control" ).val();

// call geocoder service
        geocoder = new google.maps.Geocoder();

        // set address equal to address put into form
        geocoder.geocode({ 'address': userAddress }, function(results, status) {
// if valid, append latlong to ajaxloader
            if (status == google.maps.GeocoderStatus.OK) {
                $('.input-field').append( "<div id='ajaxloader1'></div>" );
                var myLat = results[0].geometry.location.k; // set latitude variable
                var myLong = results[0].geometry.location.A; // set longitude variable
                console.log( results );
// call webserver, submitting lat long variables
                $.get(
                    "/php/api/index.php"
                    , {
                        'lat': myLat
                        , 'long': myLong
                    }
                ).done( //upon completed submission, ingest data
                    function( data ) {
                        data = JSON.parse( data ); //parse the json
	                    console.log(data); //console log JSON object

                        var template = $("#resultsList").html(); //push to underscore js template
                        $("#tacoResults").html(_.template(template,{items:data}));
	                    $.fn.fullpage.moveTo(0, 1); //go to next page
                        $('#ajaxloader1').remove(); //get rid of ajaxloader class

//push results into google map per taco row

                    var mapOptions = {
                          center: new google.maps.LatLng(-34.397, 150.644),
                          zoom: 8
                        };
                    var map = new google.maps.Map(document.getElementById("map-canvas"),
                            mapOptions);
                    var marker = new google.maps.Marker(
                                {
                                position: data.latitude+','+data.longitude
                                ,title: data.name
                             }
                    );
            } else {
                $( '.form-group' ).addClass( 'has-error');
                $( '.control-label' ).empty();
                $( '.control-label' ).append( 'Try again...' );
                $( '.form-control' ).attr( 'id', 'inputError' );
                $( '#submit_btn' ).removeAttr( 'disabled' );
            }

        });



    });

});

// Close off the anonymous function and execute it
})();