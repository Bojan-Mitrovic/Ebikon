var btnOpen = document.querySelector('.hamburger');
var btnClose = document.querySelector('.close');
var menu = document.querySelector('.menu-container');

// open menu
btnOpen.addEventListener('click', function() {
        menu.style.display = 'block'
    })
    // close menu
btnClose.addEventListener('click', function() {
    menu.style.display = 'none'
})