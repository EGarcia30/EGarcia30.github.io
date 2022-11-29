const btnMenu = document.getElementById('btn-menu');
const ltMenu = document.getElementById('nav');
const btnClose = document.getElementById('btn-close');
const bgMenu = document.getElementById('back_menu');
document.getElementById('back_menu').addEventListener('click', ocultar);
document.getElementById('nav').addEventListener('click', ocultar)

function ocultar(){
    ltMenu.classList.remove('nav-toggle')
    bgMenu.style.display = "none";
}

btnMenu.addEventListener('click', () =>{
    ltMenu.classList.toggle('nav-toggle')
    bgMenu.style.display = "block";
});

btnClose.addEventListener('click', ocultar);

//EFECTOS SCROLL
const efectoSlideDown = document.getElementById('slideDown');

const sobreMi = () =>{
    if(scrollY > 300){
        efectoSlideDown.classList.add('st__translate-end');
        efectoSlideDown.classList.remove('st__translate-start');
    }
    else{
        efectoSlideDown.classList.remove('st__translate-end');
        efectoSlideDown.classList.add('st__translate-start')
    }
}

window.addEventListener('scroll', sobreMi)

/*Active*/
const linkItems = document.querySelectorAll('.nav__link');

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener('click', () => {
        document.querySelector('.nav__link--active').classList.remove('nav__link--active');
        linkItem.classList.add('nav__link--active');
    })
})