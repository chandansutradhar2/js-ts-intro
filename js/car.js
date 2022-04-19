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
// for (let key in i20) {
// 	// code to be executed
// 	console.log(key);
// }
//console.log(i20 === nexon);

class Car {
	name;
	engineCapacity;
	maxPassenger;
	mfgCo;
	mfgYear;
	bodyType;
	constructor(
		_name,
		_engineCapicity,
		_maxPassenger,
		_mfgCo,
		_mfgYear,
		_bodyType,
	) {
		this.name = _name;
		this.engineCapacity = _engineCapicity;
		this.bodyType = _bodyType;
		this.mfgCo = _mfgCo;
		this.mfgYear = _mfgYear;
		this.maxPassenger = _maxPassenger;
	}

	start() {
		console.log(`${this.name} started..`);
	}

	stop() {
		console.log(`${this.name} stopped..`);
	}

	accelerate() {
		console.log(`${this.name} accelerating..`);
	}

	brake() {
		console.log(`${this.name} braked..`);
	}

	static jumpStart() {
		console.log(`${this.name} jump started..`);
	}
}

Car.jumpStart();

const tiago = new Car("tiago", "1200", 5, "tata", 2021, "hatchback");

const celero = new Car("Celero", "1299", 5, "Maruti", 2022, "hatchback");
console.log(typeof tiago, tiago);
console.log(typeof celero, celero);
celero.start();
tiago.start();
