/* YOU ARE IN: card_game_homework/javascript/script.js */
/*        **FEATURES**
		1.Random Placement
		2.Click to display card
		3.Every two clicks hide all cards
		4.On Correct match freeze matching cards 
*/

( function() { //protect the lemmings


var cardId = div.attr('class')

function unflippedClick() {
		if (cardId.hasClass( "flipped" ) ) {
			alert( "you already flipped that card" );
		}

		else {
			cardId.addClass("flipped");
		}

}

cardId.click(unflippedClick())

})()