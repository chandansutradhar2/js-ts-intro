let z = 20;
function add() {
	let i = 10; //javascript dont support datatype
	let j = 20;
	let k = i + j; //js will asign string type
	console.log(typeof k, k);
}

function dataDemo() {
	//demo of changing type at runtime
	let i = 10;
	console.log(typeof i);
	i = "abc";
	console.log(typeof i);
}

function sum(n1, n2) {
	console.log(typeof n2);
	return n1 + n2;
}

function constDemo() {
	const i = 20; //const demo - insitilaized only once
	i = 40; //will emit runtime error due to reinitialization
	i = 70;
}

//constDemo();

function fun1() {
	let i = 10; //scoped to fun1 only. cannot be accessed woutside fun1
	console.log("z", z);
	for (let index = 0; index < 10; index++) {
		//index is blocked scope
		console.log(index, i);
		console.log("z", z);
	}
	//console.log(index); cannot access outside the block scope
}

function fun2() {
	console.log("value of i is", i);
}

fun1();
//console.log("addition value is " + sum(7, "4"));
//dataDemo();
//add();
