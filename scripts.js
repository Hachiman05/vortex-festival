function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

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
