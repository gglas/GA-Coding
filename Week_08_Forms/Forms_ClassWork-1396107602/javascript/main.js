/* CURRENTLY IN: javascript/main.js */
(function(){ // protect zee lemmings


// Make the request, 
// once we get the data, do something


var API = 'http://api.openweathermap.org/data/2.5/weather';



$.listen('parsley:form:validated', function( formInstance ) {
	var isValid = formInstance.validationResult;

	if ( isValid == true ) {
		// if we are here, form is valid, let's make our get Request
			$.get( 
				API
				, { 
					q: $('#select').val()
				}
				, function( data ){
					// only called IF api.openweatherap.org decides to give us info
					console.log( data );
					$( '.col-lg-6' )
						.empty()
						.append( '<h1>'+data.name+'</h1>' );
				}
				, "jsonp"
			);
	}
});
	})();