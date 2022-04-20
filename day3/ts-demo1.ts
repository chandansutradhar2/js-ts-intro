const user1 = {
	firstName: "Angela",
	lastName: "Davis",
	role: "Developer",
};

console.log("welcome", user1.firstName);

const newObj = { url: "", name: "", icon: "" };

newObj.icon = "";

interface Customer {
	customerId: string;
	fullName: string;
	email: string;
	mobileNo: string;
	age: number;
	gender: string;
}

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	isDiscount: boolean;
	expiryDate: Date;
}

class Order {}

class OrderItem {}

class ECOMApp {
	createCustomer() {
		const custObj: Customer = {
			age: 38,
			fullName: "abc",
			customerId: "c001",
			email: "abc@gmail.com",
			gender: "m",
			mobileNo: "8080811145",
		};
		//logic to add customer to db;
		// const custObj =new Customer(
		// 	"c001",
		// 	"chandan naresh",
		// 	"chandan@gmail.com",
		// 	"808082222",
		// 	39,
		// 	"male",
		// );

		//todo submit data to db
		//console.log(custObj);
	}

	addProduct() {
		// const productObj = new Product(
		// 	"p001",
		// 	"Dell Latitude 3450",
		// 	"Dell Laptop",
		// 	124000,
		// 	false,
		// 	new Date("2030"),
		// );
		const productObj: Product = {
			description: "",
			expiryDate: new Date(),
			id: "",
			isDiscount: true,
			name: "",
			price: 73632,
		};
		productObj.id = "p001";
	}
}
