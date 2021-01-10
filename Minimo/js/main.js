var burgerWrapper = document.querySelector('.burgerWrapper');
var burgerMenu = document.querySelector('.burgerMenu');
var socialMenu = document.querySelector('.socialMenu');

burgerWrapper.addEventListener('click', function() {
	burgerMenu.classList.toggle('burgerActive');
	socialMenu.classList.toggle('socMenuActive');
});