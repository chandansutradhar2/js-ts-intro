function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 1");
			resolve(10);
		}, 1000);
	});
}

function fun2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 2");
			resolve();
		}, 2000);
	});
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
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 4");
			resolve();
		}, 2000);
	});
}

function fun5() {
	console.log("fun 5");
}
function fun6() {
	console.log("fun 6");
}

async function caller() {
	let result = await fun1();
	console.log(result);
	await fun2();
	await fun3();
	await fun4();
	fun5();
	fun6();
	console.log("last line");
}

caller();
