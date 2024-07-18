function toggleMenu() {
    const menu = document.querySelector('nav.menu');
    menu.classList.toggle('active');
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector('nav.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', closeMenuOnClickOutside);
});

function initMap() {
    var djerba = { lat: 33.8076, lng: 10.8465 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: djerba
    });
    var marker = new google.maps.Marker({
        position: djerba,
        map: map
    });
}
