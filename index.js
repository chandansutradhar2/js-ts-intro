function testFunction() {
	//function declaration
	//called as fucntion because they don't belong to any class
	//alert("test function called");
}

testFunction(); //function invocation

function isLoggedIn() {
	//todo: check user session
	if (false) {
		document.getElementById("login").style.visibility = "hidden";
	} else {
		document.getElementById("logout").style.visibility = "hidden";
	}
}
function changeContent() {
	document.getElementById("demo").innerHTML = "Hello JavaScript + TypeScript";
	//document.write("Written using JS");
}

function toggleBackground() {
	let color = document.getElementById("demo").style.backgroundColor;

	if (color == "yellow") {
		document.getElementById("demo").style.backgroundColor = "green";
	} else {
		document.getElementById("demo").style.backgroundColor = "yellow";
	}
}
