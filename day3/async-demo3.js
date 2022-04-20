function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 1");
			resolve();
		}, 5000);
	});
}

function fun2() {
	console.log("fun 2");
}

function fun3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 3");
			resolve();
		}, 2000);
	});
}

function fun4() {
	console.log("fun 4");
}

// fun1().then(() => {
// 	fun2();
// 	fun3().then(() => {
// 		fun4();
// 	});
// });

fun1();
fun2();
fun3();
fun4();
