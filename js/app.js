// VARIABLES

var navBar = document.getElementById('nav');
var links = document.getElementById('links');
var openNav = document.getElementById('open');
var buttons = document.getElementsByClassName('btn-header');
var closedBar = true;

let front1 = document.getElementById('front1');
let front2 = document.getElementById('front2');
let front3 = document.getElementById('front3');
let front4 = document.getElementById('front4');
let text = document.getElementById('text');

AOS.init({
    duration: 1500,
});

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    front1.style.top = value * 0.25 + 'px';
    front2.style.left = -value * 0.35 + 'px';
    front3.style.top = value * -0.15 + 'px';
    front4.style.top = value * 0.15 + 'px';
    text.style.top = value * 0.5 + 'px';
});

function menus() {

    let yPosition =  window.pageYOffset;

    if(yPosition <= 470)
    {
        navBar.classList.remove('nav2');
        navBar.className = ('nav1');
        navBar.style.transition = '1s';
        links.style.top = '80px';
        openNav.style.color = '#fff';

    } else {
        navBar.classList.remove('nav1');
        navBar.className = ('nav2');
        navBar.style.transition = '1s';
        links.style.top = '89px';
        openNav.style.color = '#fff';
    }
};

window.addEventListener('scroll', menus);

window.addEventListener('load', menus);


function opening() {

    if(closedBar){
        links.style.width = '75vw';
        closedBar = false;
    } else {
        links.style.width = '0%';
        links.style.overflow = 'hidden';
        closedBar = true;
    }
};


openNav.addEventListener('click', opening);


window.addEventListener('resize', function(){
    if(screen.width >= 700)
    {
        closed = true;
        links.style.removeProperty('overflow');
        links.style.removeProperty('width');
    }
});

window.addEventListener('click', function(e){
    if(closedBar == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== openNav){
            links.style.width = '0%';
            links.style.overflow = 'hidden';
            closedBar = true;
        }
    }
});


