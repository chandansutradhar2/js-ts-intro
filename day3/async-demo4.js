import { Observable } from "rxjs";

function fun1() {
	return new Promise((resolve, reject) => {
		//let timeValue = Math.floor(Math.random()*1000);
		setInterval(() => {
			console.log("inside fun1");
			resolve("new msg recieved");
		}, 2200);
	});
}

fun1().then((res) => {
	console.log(res);
});
