/* YOU ARE IN: card_game_homework/javascript/script.js */
/*        **FEATURES**
		1.Random Placement
		2.Click to display card
		3.Every two clicks hide all cards
		4.On Correct match freeze matching cards 
*/

( function() { //protect the lemmings


var noClickCard = $( ".card" )


function cardflip( e ) {
	var clickedCard = $( 'this' );
	if (clickedCard.hasClass('flipped')) {
		alert( 'you already clicked here')
	};
	else {
	clickedCard.addClass('flipped')
	}
}


clickedCard.click(cardFlip())

})()