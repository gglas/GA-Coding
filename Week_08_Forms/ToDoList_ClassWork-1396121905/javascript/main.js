/* CURRENTLY IN: javascript/main.js */
(function(){  // protect the puffins!


	var toDoForm = $( '.todo-list' );
	var tasksHolder = $( '.tasks' );

	toDoForm.on(
		'submit'
		, function( e ) {
			e.preventDefault();
			// grab the task in the input field
			var task = $( '#my-task' ).val();
			// validate task
			if ( task == "" || task == " " ) {
				alert( 'Enter a task' )
				return; //if task not valid, peace out
			}
			
			// if we made it here, task is valid
			var div = $( '<div/>' );
			div.addClass( 'list-group-item');
			div.text( task );


			// add the glyphicon
			var glyph = $( '<span/>' );
			glyph.addClass ( 'glyphicon glyphicon-pencil float-right')
			div.append( glyph );

			// create the x button

			var button = $( '<button/>' );
			button.addClass( 'close' );
			button.attr( 'type', 'button' );
			button.text( 'x' );

			div.append( button );

			tasksHolder.append( div );
			$( 'my-task' ).val( '' );
		}
	);

tasksHolder.on( 
		'click'
		, '.list-group-item'
		, function ( e ) {
			$( this ).toggleClass( 'task-complete' )
		}
	);
tasksHolder.on(
	'click'
	, '.close'
	, function ( e ) {
		$( this ).parent().remove();
		}
	);

tasksHolder.on(
	'click'
	, '.glyphicon-pencil'
	, function ( e ) {
		e.preventDefault();
		e.stopPropagation
		}
	);



})();