//  I want to add 1+2+3+4


function sum() {
	var a1 = 1;
	var a2 = 2;
	var a3 = 3;
	var a4 = 4;

	var sum = a1+a2+a3+a4;
	return sum;

	console.log ( a1+a2+a3+a4 )
}

var answer = sum();

console.log ( answer );

// alert( sum() );

// when javascript is parsing, it looks up all of the functions before it starts parsing things - the same does not hold for variables, they have to be declared and defined before they ccss
images
index.html
javascriptan be called


var answer1 = sum();

alert( answer1 );


function improvedSum( a1, a2, a3, a4 ) {
	var sum = a1+ a2+ a3+ a4;
	return sum;
}

var answer2 = improvedSum( 6, 7, 8, 9 );

var answer3 = improvedSum( -1, 1, -1, 1);

var name = window.prompt ( 'Yo dawg, what\'s your name?' );

function greeting( whoToGreet ) {
	alert( 'Welcome ' + whoToGreet );
}

alert( name );