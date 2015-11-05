// Whenever the user types in the text field and presses the <return> key, append a <li> with the value from prompt to ul#log, then reset the value of prompt.

//going through phil's code to disect and better understand

var $prompt;
var $log;

var borrower = {
	Antonio: 0,
	Bassanio: 0.
}

var number = parseInt($prompt)
//need to define number but not sure how

var shylock = {
	purse: 10000,
	process: function(input) {
		if (input === 'purse') {
			logOutput("ShylockBot pulls out his purse which contains " + shylock.purse + " ducats", 'action');
		}
		//below is part 2
		else if (input === 'loan' + borrower + number + 'ducats'){
			logOutput("Shylock gives " + borrower + loan + " ducats", 'action')
		} else if (input === 'fuck ducats'){
			logOutput("GET MONEY", 'action')
		}
		else { 
			logOutput("I\'m really confused", 'quote')
		}

	}

};

var logOutput = function(message, type){

	var $output = $('<li>');
	// that creates the li

	$output.text(message);

	//that sets the text of the li just created

	$output.addClass(type);

	//that sets the class

	$log.append($output);
	//that appends to the log
}

var handleInput = function(event){
	//that creates a new function which has an event

	if (event.which === 13){
		// that makes the event listener happen when return is pressed
		var input = $prompt.val();
		//that grabs the value from the prompt
		logOutput(input, 'command')
		//this will print out whatever the user enters into the log
		shylock.process(input);
		//that sends it back to the shylock object to process
	}
}

// var loan = function(event){
// 	if (event.which === 13){
// 		var input = $prompt.val()
// 		shylock.purse -= parseFloat();
// 		logOutput(input, 'action');
// 		shylock.process(input);
// 	}
// }

//what I did above did not work



var loan = function(event){
	$prompt.val();
 
 	switch (loan) {
 		case "Antonio":
 		text = "Shylock gives Antonio " + number + " ducats";
 		break;

 		case "Bassanio":
 		text = "Shylock gives Bassanio " + number + " ducats";
 		break;

 		default:
 		text = "Dammit, I\'m still confused."
 	}
}

// that didn't work either


//part 2

//shylock needs to be able to lend money. 

//antonio and bassanio are two people/ objects that shylock can give money

//loan needs to be a function that deducts ducats from shylock's purse




//part 3

//shylock needs to keep track of his loans

// so, ledger will be the keyword that outputs the loans shylock gave out

//ledger will be a function 




//we only need the following once the document has loaded

$(document).ready(function(){
	$prompt = $('#prompt');
	$log = $('#log');

	//those just select the prompt and log using id's

	$prompt.on('keypress', handleInput);


	//when i call the event listener for my loan function, it messes up the handle input function

	//that puts the eventlistener onto our handleInput function
});

























// //make function

// //take the value of prompt and append to the log as a new li
// //then clear

// var logOutput = function(message, type){
// 	//create LI
// 	var $output = $('<li>');
// 	$output.text(message);
// 	$output.addClass(type)
// 	//set the text of the LI
// 	//set eh class of the LI
// 	//spend to the log
// }


// promptToLog = function(event){
// 	var key = event.keyCode;
// 	if (key === 13){
// 	$promptLi = $('<li>');
// 	$promptLi.text($prompt.val());
// 	$log.append($promptLi);
// 	$promptLi.addClass('command');
// 	// $prompt.val(" ")

// switch (purse) {
// 	case "purse":
// 	$promptLi = $('<li>');
// 	$promptLi.text("ShylockBot pulls out his purse containing " + purse + " ducats.")
// 	$promptLi.addClass('action');
// 	break;
// }
// }


// $(document).ready(function(){

// $log = $('#log');
// $prompt = $('#prompt')




// // purse = function(){
// // 	if ($promptLi === 'purse'){
// // 		console.log('on the way')
// // 	}
// // }
// })


// $prompt.on('keypress', promptToLog);
// }

// //act 1

// //for this, I need to establish purse as a command

// //then, make a new list item(that li needs to have * before and after), which will have the class of action and be italicized 




	
















