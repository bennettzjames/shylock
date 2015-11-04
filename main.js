// Whenever the user types in the text field and presses the <return> key, append a <li> with the value from prompt to ul#log, then reset the value of prompt.


$(document).ready(function(){

$log = $('#log');
$prompt = $('#prompt')

//make function

//take the value of prompt and append to the log as a new li
//then clear

promptToLog = function(event){
	var key = event.keyCode;
	if (key === 13){
	$promptLi = $('<li>');
	$promptLi.text($prompt.val());
	$log.append($promptLi);
	

}

};

$prompt.on('keypress', promptToLog);


	
















});