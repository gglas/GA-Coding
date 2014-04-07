/* CURRENTLY IN: javascript/main.js */


(function(){	// protect the lemmings!

    	function makeAJAXReq() {
    		// step 1: generate random number
    		var __TOTAL__ = 614;

    		// A: save random number to variable
    		var randomNum = Math.random();

    		// B: multiple 614 by random number ( that we saved )
    		var myComicNum = randomNum * __TOTAL__; 

    		// C: round to get integer
    		myComicNum = Math.round( myComicNum );

    	// step 2: build the url with new random number: http://dynamic.xkcd.com/api-0/jsonp/comic/600
    		var __URL__ = 	'http://dynamic.xkcd.com/api-0/jsonp/comic/'  +	 myComicNum;

    	// step 3: make ajax request
	    	$.get( __URL__ , function( data ) {
	    		$( '#image-holder' )
	    			.empty()
	    			.append( '<img src="'+data.img+'" />' );
			}, 'jsonp' );
		}
		makeAJAXReq();

		$( '.container' ).on(
			'click'
			, '#refresh-button'
			, makeAJAXReq
		);

    })();