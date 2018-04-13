"use strict";

var Users = [{
	login: "Ivan",
	password: "123a",
	token: 0
}, {
	login: "Artem",
	password: "555asd",
	token: 1
}, {
	login: "Andrey",
	password: "ccss",
	token: 2
}];
var button = document.getElementById("button");

function auth(Users) {
	var login = document.getElementById("first_name");
	var password = document.getElementById("password");
	var modal = document.getElementsByClassName("windowModal")[0];

	var promise = new Promise(function (resolve, reject) {
		modal.style.display = "flex";
		setTimeout(function () {
			modal.style.display = "none";
		}, 1000);
		var flag = 0;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;

				if (login.value == key.login && password.value == key.password) {
					console.log("Удачно");
					flag = 1;
					break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		if (flag == 0) {
			console.log("Неудачно");
		}
	});

	return promise;
}
console.log("Users", Users);
button.addEventListener("click", function () {
	auth(Users);
});