/* YOU ARE IN: class_ex1/javascript/script.js */

(function(){ // protect the lemmings!

// if pointer in the box set label to yes

// $( '#box' ).on(
// 	'mouseenter'
// 	, function( e ) {
// 		$( '#label' ).text( 'YES' );
// 		}
// 	)


// // if pointer is outside the box

// $( '#box' ).on(
// 	'mouseleave'
// 	, function( e ) {
// 		$( '#label' ).text( 'NO' );
// 		}
// 	)



// CACHE YOUR SELECTORS FOOL

function enterLeave( boxElement, labelElement, evtStr, lbl ) {
	boxElement.on(
		evt
		, function( e ) {
			labelElement.text( lbl );
			}
		)
}

var box = $( '#box' )
	, label = $( '#label' );

enterLeave( box, label, 'mouseenter', 'YES' );
enterLeave( box, label, 'mouseleave', 'NO' );
// enterLeave( 'mousemove', 'MOVING' );

var box2 = $( '#box2' )
	, label2 = $( '#label2' );
enterLeave( box2, label2, 'mouseenter', 'YES' );
enterLeave( box2, label2, 'mouseleave', 'NO');
})();

/*

step 1 : () ()
step 2 : ( function() {} ) ()
step 3 :
(function()){
	
})()

*/
