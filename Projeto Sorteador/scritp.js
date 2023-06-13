function generateNumber() {
	
	let min = Math.ceil(document.querySelector(".input-min").value);
	let max = Math.floor(document.querySelector(".input-max").value);

	let result = Math.floor(Math.random() * (max - min + 1)) + min;

	alert(result);
	
}