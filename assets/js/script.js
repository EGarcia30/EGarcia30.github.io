const btnMenu = document.getElementById('btn_menu');
const ltMenu = document.getElementById('lt-nav');
const btnClose = document.getElementById('btn_close');
const bgMenu = document.getElementById('back_menu');
document.getElementById('back_menu').addEventListener('click', ocultar);
document.getElementById('lt-nav').addEventListener('click', ocultar)

function ocultar(){
    ltMenu.classList.remove('nav-toggle')
    bgMenu.style.display = "none";
}

btnMenu.addEventListener('click', () =>{
    ltMenu.classList.toggle('nav-toggle')
    bgMenu.style.display = "block";
});

btnClose.addEventListener('click', ocultar);