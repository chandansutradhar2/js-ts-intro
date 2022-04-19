//functional programing

function fun1() {
	console.log("function 1 invoked");
}

function fun2() {
	console.log("function 2 invoked");
}

function fun3() {
	console.log("function 3 invoked");
}

function fun4() {
	console.log("function 4 invoked");
	fun1();
}

fun2();
fun4();
