var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//function to store input length
const inputLength = () => {return input.value.length;}

//function to add items into the list
const addItems = () => {
	let li = document.createElement("li"); //creates a list element<li>
	li.appendChild(document.createTextNode(input.value));//add the inputs to the list element
	ul.appendChild(li); //adds the list element to the list of to-dos
	input.value = ""; //sets the input value to null

	//ADD CHECKBOX
	let check = document.createElement("input");
	check.type = "checkbox";
	li.appendChild(check);
	// END ADD CHECKBOX

	//ADD A CROSSOUT FUNCTION FOR COMPLETED TASKS
	const crossOut = () => {
		li.classList.toggle("done");
	}
	//END ADD CROSSOUT FUNCTION
	check.addEventListener("click", crossOut);

	//ADD deleteListItem FUNCTION TO REMOVE DELETED TASKS
	const deleteListItem = () => {
		li.classList.add("delete");
	}

	//add delete button
	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("X"));
	li.appendChild(button1);
	button1.addEventListener("click", deleteListItem);
	//END ADD DELETE BUTTON	
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