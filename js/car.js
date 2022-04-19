function carFactory(
	name,
	engineCapacity,
	maxPassenger,
	mfgCo,
	mfgYear,
	bodyType,
) {
	return (carObj = {
		name: name,
		engineCapacity: engineCapacity,
		maxPassenger: maxPassenger,
		mfgCo: mfgCo,
		mfgYear: mfgYear,
		bodyType: bodyType,
	});
}

const i20 = carFactory("I20 Sportz", 1200, 5, "Hyundai", 2021, "hatchbach");
let nexon = carFactory("Nexon LUX", 1600, 5, "TATA", 2020, "suv");

i20.mfgYear = 2015; // will pass
//i20 = {};//this will fail
//will work because we are not changing the object
//itself but changing proeprty within object

//console.log(i20, nexon);
for (let key in i20) {
	// code to be executed
	console.log(key);
}
//console.log(i20 === nexon);
