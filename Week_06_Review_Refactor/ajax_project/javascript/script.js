/* YOU ARE IN: ajax_project/javascript/script.js */

(function(){ // protect the lemmings

	// PLAN: perform an ajax request
	// grab the data -> sunset time
	// grab current time
	// IF current time > sunset time, it is not light out
	// IF current time < sunset time, it IS light out
	// profit


	function performAJAX( city, country ) {
		// BUILD THE URL
		var url = 
			'http://api.openweathermap.org/data/2.5/weather?q='+
			city+
			',%20'+
			country;
		// PERFORM THE GET REQUEST	
		$.get(
			url
			, ajaxSuccess
			, 'jsonp'
			);
	}

	function ajaxSuccess( data ) {
		console.log( data.sys.sunset );
		var sunsetTime = data.sys.sunset;
		var d = new Date();
		var now = d.getTime()/1000;
		// can also be done as $.now with jquery

		var body = $( 'body' )

		if ( sunsetTime > now ){
			// it is not pas sunset
			body.addClass( 'daytime');
			$( '.daytime' ).addClass( 'panorama_mode' );
		}
		else {
			// it is past sunset
			body.addClass( 'nighttime' );
			$( '.nighttime' ).addClass ('panorama_mode');
		}
	}

	performAJAX( 'nyc', 'us' );
	$(".panorama").panorama_viewer({
		console.log('panorama');
	    repeat: false,              // The image will repeat when the user scroll reach the bounding box. The default value is false.
	    direction: "horizontal",    // Let you define the direction of the scroll. Acceptable values are "horizontal" and "vertical". The default value is horizontal
	    animationTime: 700,         // This allows you to set the easing time when the image is being dragged. Set this to 0 to make it instant. The default value is 700.
	    easing: "ease-out",         // You can define the easing options here. This option accepts CSS easing options. Available options are "ease", "linear", "ease-in", "ease-out", "ease-in-out", and "cubic-bezier(...))". The default value is "ease-out".
	    overlay: true               // Toggle this to false to hide the initial instruction overlay
	  });
	// $( '.my_slider' ).bxSlider();

// $.ajax(
// 	{	url: url
// 		,dataType: 'jsonp'
// 		,success: function( data ) {
// 		console.log( data );
// 		}	
// 	}
// 	);
})();