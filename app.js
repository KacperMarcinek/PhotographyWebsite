const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const topBtn = document.querySelector("#topBtn");

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-open");
	burger.classList.toggle("toggle");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.toggle("nav-open");
		burger.classList.toggle("toggle");
	});
});

/* Top Button */

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
}

topBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
