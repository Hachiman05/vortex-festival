function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.menu-toggle');
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        menu.style.display = 'none';
    }
});
