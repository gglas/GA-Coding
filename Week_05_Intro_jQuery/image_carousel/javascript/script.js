/* YOU ARE IN: image_carousel/javascript/script.js */
(function() { // protect the lemmings!
	var images = [
		'http://placekitten.com/200/300'
		, 'http://placekitten.com/200/500'
		, 'http://placekitten.com/500/300'
		, 'http://placekitten.com/100/300'
		, 'http://placekitten.com/600/600'
		];

	var currPosition = 0;
	var imageEl = $( 'img' );
	var nextButton = $( '.next' );

	function nextButtonClick () {
		currPosition += 1; // the same as currPosition = currPosition + 1;
		console.log(currPosition);

		if ( currPosition == images.length ) {
			currPosition = 0;
		}

		var newImageSource = images[ currPosition ];
		console.log(newImageSource);
		imageEl.attr( 'src', newImageSource );
		// IF WE REACH THE END OF THE ARRAY, RESET CURRPOS TO 0

	}

	function keyPressEvent ( e ) {
		console.log( e.which );
		if (e.which == 97 ) {
			nextButtonClick();
		};
	}

	nextButton.click( nextButtonClick );

	$( document ).keypress( keyPressEvent );

})();

