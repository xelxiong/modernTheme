// NOTE creates the animation for toggle button aka click effect
// NOTE this is creating the variable for the targeted document ID.
// NOTE remembe to add the 'hashtag' if its ID or '.' for class when you're calling it from HTML
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

// NOTE listens for a click
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});