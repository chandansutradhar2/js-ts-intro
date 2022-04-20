function fun1() {
	console.log("function 1 invoked");
}

function fun2() {
	setTimeout(() => {
		console.log("function 2 invoked");
	}, 3000);
}

function fun3() {
	console.log("function 3 invoked");
}

function fun4() {
	setTimeout(() => {
		console.log("function 4 invoked");
	}, 1200);
	console.log("last line of function 4");
}

function fun5() {
	setTimeout(() => {
		console.log("function 5 invoked");
	}, 2000);
}

fun1();
fun2();
fun3();
fun4();
fun5();
