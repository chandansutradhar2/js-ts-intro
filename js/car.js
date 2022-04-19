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

let i20 = carFactory("I20 Sportz", 1200, 5, "Hyundai", 2021, "hatchbach");
let nexon = carFactory("Nexon LUX", 1600, 5, "TATA", 2020, "suv");

console.log(i20, nexon);
console.log(i20 === nexon);
