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
}

function toggleBackground() {
	let color = document.getElementById("demo").style.backgroundColor;

	if (color == "yellow") {
		document.getElementById("demo").style.backgroundColor = "green";
	} else {
		document.getElementById("demo").style.backgroundColor = "yellow";
	}
}
