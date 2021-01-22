// Script for a first slider
$(document).ready(function(){
    $('.offerSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });
});

// Script for a second slider
$(document).ready(function(){
    $('.ourTeamSlider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
    });
});

new WOW().init();

// Beautiful scrolling across the page
$(document).ready(function(){
    $("#navGroup").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



