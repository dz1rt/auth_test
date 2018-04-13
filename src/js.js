const Users = [
	{
		login: "Ivan",
		password: "123a",
		token: 0
	},
	{
		login: "Artem",
		password: "555asd",
		token: 1
	},
	{
		login: "Andrey",
		password: "ccss",
		token: 2
	}
];
let button = document.getElementById("button");

function auth(Users) {
	let login = document.getElementById("first_name");
	let password = document.getElementById("password");
	let modal = document.getElementsByClassName("windowModal")[0];

	let promise = new Promise(function(resolve, reject) {
		modal.style.display = "flex";
		setTimeout(() => {
			modal.style.display = "none";
		}, 1000);
		let flag = 0;

		for (let key of Users) {
			if (login.value == key.login && password.value == key.password) {
				console.log("Удачно");
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			console.log("Неудачно");
		}
	});

	return promise;
}
console.log("Users", Users);
button.addEventListener("click", () => {
	auth(Users);
});
