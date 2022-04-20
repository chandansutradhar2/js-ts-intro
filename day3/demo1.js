function test() {
	console.log("line 1");
	console.log("line 2");
	console.log("line 3");
	setTimeout(() => {
		console.log("line 4");
	}, 2000000);
	console.log("line 5");
	let i = 10;
	let j = 20;
	let k = i + j;
	console.log("sum of i and j is" + k);
	setTimeout(() => {
		console.log("line 6");
	}, 2500);
	console.log("line 7");
	console.log("line 8");
}

test();
