const bars = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('.nav_links ul li');
const searchIcon = document.querySelector('.fa-search');
const search = document.querySelector('.search');
const shopIcon = document.querySelector('.fa-shopping-cart');
const cart_div = document.querySelector('.cart_div');
const user = document.querySelector('.fa-user');
const loginForm = document.querySelector('.login_form');

bars.addEventListener('click', function () {
	navLinks.classList.toggle('show_nav');
});
links.forEach((link, i) => {
	link.addEventListener('click', function () {
		navLinks.classList.remove('show_nav');
	});
});
searchIcon.addEventListener('click', function () {
	search.classList.toggle('search_show');
});
shopIcon.addEventListener('click', function () {
	cart_div.classList.toggle('show_cart');
});
user.addEventListener('click', function () {
	loginForm.classList.toggle('show_login');
});
window.addEventListener('scroll', function () {
	cart_div.classList.remove('show_cart');
	search.classList.remove('search_show');
	loginForm.classList.remove('show_login');
});
//Swiper JS
var swiper = new Swiper('.mySwiper', {
	// slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});
