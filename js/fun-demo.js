//arrow function
//modern way of creating function
const abc = (t1, t2 = 10) => {
	console.log("creating function demo");

	return t2;
	console.log("line after return statement");
};

let i = abc();
console.log(i);
/*defining function with no return value (void)
// function fun1() {
// 	console.log("function 1 invoked");
// }

// function fun2() {
// 	return 10;
// }

// function fun3() {
// 	return "hello";
// }

// function isLoggedin() {
// 	return false;
// }

// function getObject() {
// 	return {
// 		name: "chandan",
// 		email: "chandan@gmail.com",
// 	};
// }
// fun1();

// console.log(fun2(), fun3(), isLoggedin(), getObject());*/
