/* CURRENTLY IN: javascript/main.js */

(function(){ //Protect the comics!



var body = $( 'body' );

$.get('https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=069cf3f17e454b0392a47e8f0e2b9d94', function(data){
	// console.log( data );
	// console.log( data.data );
	$.each( data, function( idx, el ) {
		console.log( idx, el );

		console.log( el.images.thumbnail.url );
		var img = $( '<img/>' );
		img.attr( 'src', el.images.thumbnail.url );
		body.append( img );
	}, 'jsonp')
}


})();