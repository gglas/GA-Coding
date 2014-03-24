/* YOU ARE IN: card_game_homework/javascript/script.js */
/*        **FEATURES**
		1.Random Placement
		2.Click to display card
		3.Every two clicks hide all cards
		4.On Correct match freeze matching cards 
*/

( function() { //protect the lemmings





var clickedDiv = $( 'div' );

clickedDiv.onclick=grabClass();

console.log()

function grabClass ( clickedDiv ) {
	var divClass =  clickedDiv.attr( 'class')
	return divClass
	console.log()
}


function unflippedClick( e ) {
		var $clicked = $(this);
		if (clickedDiv.hasClass( "flipped" ) ) {
			alert( "you already flipped that card" );
		}

		else {
			clickedDiv.addClass("flipped");
		}

}


})()