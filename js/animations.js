$(function(){

    let aboutUs = $('#about-us').offset().top,
        tech = $('#tech').offset().top,
        team = $('#team').offset().top,
        contact = $('#contact').offset().top;
    
    window.addEventListener('resize', function(){
        let aboutUs = $('#about-us').offset().top,
        tech = $('#tech').offset().top,
        team = $('#team').offset().top,
        contact = $('#contact').offset().top;
    });

    $('#start-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#about-us-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: aboutUs - 40
        }, 600);
    });

    $('#tech-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: tech - 50
        }, 600);
    });

    $('#team-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: team 
        }, 600);
    });

    $('#contact-link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact - 30
        }, 600);
    });
});


//Images carousel based on Swiper JS

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 110,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});