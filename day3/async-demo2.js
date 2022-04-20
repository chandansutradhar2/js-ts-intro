function extractData() {
	return new Promise((resolve, reject) => {
		//todo code to fetch or read using i/o

		try {
			///fetch data
			///read data
			//if (read){
			// resolve(records)
			//   }else {
			// reject()
			// }
		} catch (error) {
			//reject()
		}

		let noOfRecords = 150;
		setTimeout(() => {
			resolve(noOfRecords);
			//reject("unable to fetch");
		}, 2000);
	});
}

function transformData(noOfRecordData) {
	//todo transform into row/colum
	return noOfRecordData > 0 ? noOfRecordData : false;
}

function loadData(rowColumns) {
	//todo insert into sql server ADO.NET
	return rowColumns > 0 ? true : false;
}

extractData()
	.then((result) => {
		console.log("data recieved after extracction", result);
		const response = transformData(result);
		console.log(loadData(response));
	})
	.catch((err) => {
		console.log(err);
	});

// const result = extractData();
// console.log("after extract Data result is ", result);
// const transformedData = transformData(result);
// console.log("transformation result", transformedData);
// const finalResult = loadData(transformedData);
// console.log(finalResult);
