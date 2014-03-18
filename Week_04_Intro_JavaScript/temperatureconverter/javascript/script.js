/* YOU ARE IN: sample_project_folder/javascript/script.js */

var Fahrenheit = window.prompt ('TELL ME FAHRENHEIT TEMP NOW');

var Celsius = tempConversion( Fahrenheit );

alert( "That's" + " " + Celsius + " " + "in Celsius!" );

function tempConversion( valueToConvert ) {
	valueToConvert = parseInt ( valueToConvert );
	var Celsius = valueToConvert * 9/5 + 32;
	return Celsius
};
