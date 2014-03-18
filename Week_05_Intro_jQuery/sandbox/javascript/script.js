/*
/* YOU ARE IN: sample_project_folder/javascript/script.js
var taqquisFriends = [718, 52, 136, 14]
var clarkFriends = 
// for loop is a way to add all the elements of an arrary
// shitty way
taqquisFriends[0] + taqquisFriends[1] + taqquisFriends[2] + taqquisFriends[3]

// better way is to use a for loop

var totalFriends = 0
for( var i = 0; i <= taqquisFriends.length-1; i = i+1 ) {
	totalFriends = taqquisFriends[ i ] + totalFriends;
	console.log( 'THE ITERATION IS: ' + i );
	console.log( 'THE SUM IS: ' + totalFriends);
	} 
	console.log( 'DONE' );
	console.log( totalFriends );


	// start condition, next condition, then iteration

	// a function is a recipe that will perform a certain task
	// laid out, ingredients then instructions

	function myF(var1,var2) {
		alert(var1)

	}

	// at the end of a function you can return a value, which is what you get back after you enter the values and the operations - funciton will take the arguments

funct1();

function funct1() {
	alert( 'hi' )
}

funct2();

var funct2 = function () {
	alert( 'hello' );
}

var num=5;
var string='c';
var bool=true;
var ar= [ 1, true, 'c' ];
var table = {};
table.legs = 4;
table.material = 'wood';
table.dimensions = [ 10,10 ];


var Child = {
	age: 3
	, isPooping: true
	, weight : 10
	, speak: function() {
		alert('math')
	}
}
var empty = [];



var Table = {};
Table.legs = 4;
Table.material = 'wood';
Table.dimensions = [ 10, 10 ];
Table.price = 'expensive';

var Child = {
	age: 3
	, weight: 20
	, speak: function() {
		alert( 'math' );
	}
}

console.log ( Table, Child )

*/

console.log( $('h1') );

var h1 = $( 'h1' );
var spans = $( 'span' );
var one = $( '.one' );
var two = $( '#two' );

console.log( h1 );
console.log( spans );
console.log( one );
console.log( two );

// =============================

// I want to take all items with class='main-content' and add a class called 'found' to it 

var main = $( '.main-content' )

main.addClass ( 'found one two three');
main.removeClass ( 'two' )
main.removeClass ( 'one three' )
main.removeClass (); // this will remove all classes

// Method 1
main.css ( 'color', 'green');
main.css ( 'background-color', 'blue');
main.css ( 'border', 'red')
main.css ( 'font-size', '100px' );

// Method 2
main.css (
	{
		'background-color': 'blue'
		,'border': 'red'
		,'font-size': '100px'
	}
);








