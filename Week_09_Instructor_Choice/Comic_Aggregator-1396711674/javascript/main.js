/* CURRENTLY IN: javascript/main.js */

(function(){ //Protect the comics!


// grab and display a random XKCD comic


// Step 1 - generate random number
// 	what are the limits for a random #??
// 		a. save random number to variable
	var __TOTAL__ = 614;
	var randomNum = Math.random();
// 		b. multiply random number to get to right size
	var myComicNum = randomNum * __TOTAL__;
// 		c. round to get integer
	myComicNum = Math.round( myComicNum );
// Step 2 - build the URL

	var __URL__ = 'http://xkcd.com/' +
					myComicNum		 +
					'/info.0.json';
// Step 3 - use AJAX to issue a get

$.get( __URL__, function( data ) {
	console.log( data ); 
}, 'jsonp' );
// Step 4 - data.img (parse the JSON string)










})();