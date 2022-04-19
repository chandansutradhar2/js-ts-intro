//primitive types
let n1 = 10;
let n2 = "chandan";
let n3 = true;
let n4 = null; //object will be reserved in RAM but no space consumed
let n5; // no reference in RAM
console.log(n1, n2, n3, n4, n5);
console.log(typeof n1, typeof n2, typeof n3, typeof n4, typeof n5);

//derived types
let obj = {}; //declaring an object

let user = {
	name: "abc",
	email: "abc@gmail.com",
	mobileNo: "878887788",
};

//delcaring array of type number
let scores = [1, 29, 14, 53, 66, 27, 34, 54, 73];
console.log("array length:", scores.length);
//sorting an array
//console.log(scores.sort());

let fruits = [];
fruits.push("grapes");
fruits.push("orange");
fruits.push("mango");
fruits.push("banana");
console.log("sorted fruits", fruits.sort());

// console.log("before pop", fruits);
// fruits.pop();
// console.log("fruits", fruits);

// console.log("fruits length", fruits.length);
// //convert array to string
// let stringVar = fruits.join();
// console.log(stringVar, typeof stringVar);
// //convert string to array using split
// let tmpArr = stringVar.split(",");
// console.log(typeof tmpArr, tmpArr);
