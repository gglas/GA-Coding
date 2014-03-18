/* YOU ARE IN: sample_project_folder/javascript/script.js */

function getLeftInput () {
	return $( '#a' ).val();
}

function getRightInput () {
	return $( '#b' ).val();
}


function onClickHandler ( e ) {
	var leftInput = getLeftInput();
	var rightInput = getRightInput();

	leftInput = parseInt( leftInput );
	if ( leftInput == NaN ) {
		alert( 'Hey! '+leftInput+' is NOT a number!');
	}
	rightInput = parseInt( rightInput );
	if ( rightInput == NaN ) {
		alert( 'Hey! '+rightInput+' is NOT a number!');
	}

	if( leftInput < rightInput ) {
		alert( 'LESS THAN' );
	} else if (leftInput > rightInput) {
		alert( 'GREATER THAN');
	} else if (leftInput == rightInput) {
		alert( 'EQUAL TO');
	}

}







$( '#submit' ).on( 'click', onClickHandler );