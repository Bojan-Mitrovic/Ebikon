var searchInput = document.querySelector('.search-box');
var searchImg = document.querySelector('.search-menu');
var searchPage = document.querySelector('.home-search');
var menuPage = document.querySelector('.menu-container');
var closeBtn = document.querySelector('.close-search-page');
// open search page on click
searchInput.addEventListener('click', function() {
    searchPage.style.display = 'flex'
});
// open search page on click from menu
searchImg.addEventListener('click', function() {
    searchPage.style.display = 'flex';
    console.log('click')
});
//close search page
closeBtn.addEventListener('click', function() {
    searchPage.style.display = 'none';
    console.log('click')

})