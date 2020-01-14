let submitBtn = document.getElementById("submit");
let name = document.getElementById("name");
let age = document.getElementById("age");
let text = document.getElementById("text");
let nameErr = document.getElementById("nameErr");
let ageErr = document.getElementById("ageErr");
let textErr = document.getElementById("textErr");
let checkCapital = str => {
	str = str.split(" ");
	return str.every(el => {
		return el[0] === el[0].toUpperCase();
	});
};

submitBtn.addEventListener("click", () => {
	nameErr.innerText = ageErr.innerText = textErr.innerText = "";
	if (name.value === "") {
		nameErr.innerText = "enter your name";
	} else if (name.value[name.value.length - 1] === " ") {
		name.value = name.value.slice(0, name.value.length - 1);
	}
	if (name.value !== "" && !checkCapital(name.value)) {
		nameErr.innerText = "The first letter of each name should be capitalised";
	}
	if (age.value != Math.floor(age.value) || age.value < 0 || !age.value) {
		ageErr.innerText = "Enter valid age";
	}
	if (text.value === "") {
		textErr.innerText = "Enter comment";
	}
});
