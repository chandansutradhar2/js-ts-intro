function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 1");
			resolve();
		}, 5000);
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
function caller() {
	fun1().then(() => {
		fun2().then(() => {
			fun3().then(() => {
				fun4().then(() => {
					fun5();
					fun6();
				});
			});
		});
	});
}

caller();
