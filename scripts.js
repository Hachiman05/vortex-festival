function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const toggleButton = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});
