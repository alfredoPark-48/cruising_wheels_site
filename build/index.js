// Selecting elements
const header = document.querySelector("header");
const banner = document.querySelector("#banner");
const fade = document.querySelectorAll(".fade-transition");
const navbar = document.getElementsByClassName("nav-list")[0];
const toggle = document.getElementsByClassName("toggle")[0];

// Option handling
const bannerOption = {
	rootMargin: "-800px 0px 0px 0px",
};
const fadeOption = {
	threshold: 1,
	rootMargin: "0px 0px -60px 0px",
};

// Function that checks if we are intersecting banner section
const bannerObserver = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});
}, bannerOption);

// Function that handles navigation bar background
const appearOnScroll = new IntersectionObserver(function (entries) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
}, fadeOption);

// Calling the observer
bannerObserver.observe(banner);
fade.forEach((fader) => {
	appearOnScroll.observe(fader);
});

// Toggle button for navigation bar hamburger menu
toggle.addEventListener("click", () => {
	navbar.classList.toggle("active");
});
