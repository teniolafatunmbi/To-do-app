var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//function to store input length
const inputLength = () => {return input.value.length;
}

//function to add items into the list
const addItems = () => {
	var button1 = document.createElement("button");
	var li = document.createElement("li"); //creates a list element<li>
	li.appendChild(document.createTextNode(input.value + button1.value));//add the inputs to the list element
	ul.appendChild(li); //adds the list element to the list of to-dos
	button1.value = "x";
	input.value = ""; //sets the input value to null
}

//function to remove elements from the to-do
const removeItems = () => {
	ul.appendChild(li + button1);
}

//function to add items to the to-do
const addItemsAfterClick = () => {
	if (inputLength() > 0) {
		addItems();
	}
}

//function to remove items from the to-do
const addItemsAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		addItems();
	}
}




button.addEventListener("click", addItemsAfterClick);

input.addEventListener("keypress", addItemsAfterKeypress);