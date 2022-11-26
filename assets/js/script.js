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