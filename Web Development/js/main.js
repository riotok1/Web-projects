/* Script for header(burger) */
var navBurger = document.querySelector('.navBurger');
var burgerWrapper = document.querySelector('.burgerWrapper');
var secondNavGroup = document.querySelector('.secondNavGroup');

burgerWrapper.addEventListener('click', function(){
    navBurger.classList.toggle('navBurger-active');
    secondNavGroup.classList.toggle('secondNavGroup-active');
});

/* Script for section works (tabs)*/
let tab = function () {
    let tabNav = document.querySelectorAll('.tabItem'),
        tabContent = document.querySelectorAll('.tabContent'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('tabItem-active');
        });
        this.classList.add('tabItem-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('content-active') : item.classList.remove('content-active');
        });
    }

};
tab();


/* Script for section team (slider)*/
$(document).ready(function(){
    $('.teamSlider').slick({
       arrows:false,
       dots:true,
       slidesToShow:3,
       slidesToScroll:1,
       speed:500,
       infinite:true,
       autoplay:true,
       autoplaySpeed:3000,
       pauseOnFocus:false,
       draggable:false,
    });
});

