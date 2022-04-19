function makeCustomer(firstName, lastName, email, mobileNo, address) {
	//creating customer object
	let customerObj = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		mobileNo: mobileNo,
		address: address,
		makePayment: function () {
			console.log(this.firstName + "has initiated payment...");
		},
	};
	customerObj.makePayment();
	console.log(typeof customerObj, customerObj);

	let newCustomer = customerObj;
}

makeCustomer(
	"CHandan",
	"Naresh",
	"chandan@gmail.com",
	"808011145",
	"some address",
);
