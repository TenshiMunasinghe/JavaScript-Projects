function Clock(image, greet, color) {
	"use strict";
	this.image = image;
	this.greet = greet;
	this.color = color;

	this.changeHTML = function() {
		document.getElementById("image").src = this.image + ".jpg";
		document.getElementsByClassName("greet")[0].innerHTML = this.greet;
		document.getElementsByClassName("background")[0].style.backgroundImage =
			"url(" + this.image + ".jpg)";
		document.getElementsByClassName("container")[0].style.color = this.color;
	};
}

function showTime() {
	"use strict";
	let d = new Date();
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();

	if (hours > 0 && hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	let result = "Its " + hours + ":" + minutes + ":" + seconds + " now!";
	document.getElementsByClassName("clock")[0].innerHTML = result;
	setTimeout(showTime, 1000);
}

showTime();

let hours = new Date().getHours();

{
	let set;
	if (hours > 4 && hours < 10) {
		set = new Clock("morning", "Good morning!", "#000");
	} else if (hours > 9 && hours < 17) {
		set = new Clock("noon", "Good afternoon!", "#000");
	} else if (hours > 16 && hours < 20) {
		set = new Clock("evening", "Good evening!", "#f1f1f1");
	} else if (hours > 19 && hours < 24) {
		set = new Clock("night", "Good night!", "#f1f1f1");
	} else if (hours == 0) {
		set = new Clock("night", "Good night!", "#f1f1f1");
	} else if (hours > 0 && hours < 4) {
		set = new Clock("nero", "Go to sleep!", "red");
	}
	if (set != undefined) {
		set.changeHTML();
	}
}
