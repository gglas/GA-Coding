/* YOU ARE IN: yesornoweatherapi/javascript/script.js */
var city = "mia";
var country = "us";
var sunny = ""
var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+',%20'+country;

function gunsOut( sunny ) { 
		console.log( sunny );
		if (sunny <= 90)
		{
			$( ".yes" ).addClass ( "outsideTemp")
			$( ".no" ).addClass ( "notTemp" )
		}
		else {
			$( ".yes" ).addClass ( "notTemp" )
			$( ".no" ).addClass ( "insideTemp" )
		}
	}
$.ajax( 
	{
		url: url
		, dataType: 'jsonp'
		, success: function( data ) {
    console.log( data );
    var sunny = data.clouds.all;
    console.log( "sunny" );
    gunsOut ( sunny );
  }
}

);