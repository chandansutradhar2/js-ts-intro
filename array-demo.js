function filterArray(scores, search) {
	let results = scores.filter((item) => {
		return item > search;
	});

	console.log(results);
}

function findHigestScore(scores) {
	let highestScore = 0;
	try {
		for (let index = 0; index < scores.length; index++) {
			scores[index] >= highestScore ? (highestScore = scores[index]) : null;
			// if (scores[index] >= highestScore) {
			// 	highestScore = scores[index];
			// }
		}
	} catch {
	} finally {
	}
	return highestScore;
}

function findStore(cityName) {
	const stores = ["mumbai", "delhi", "pune", "punjab", "chennai"];
	const result = stores.findIndex((item) => {
		return item == cityName;
	});
	console.log(result);
	if (result != -1) {
		console.log(`our stores exists in ${cityName} city`);
	} else {
		console.log(`sorry..but we are yet not opened in ${cityName} city`);
	}
}

let scores = [87, 54, 22, 34, 67, 45, 22, 45, 34, 8, 76, 67, 56];
//filterArray(scores, 50);
//console.log(findHigestScore(scores));

findStore("pune");
