// Fonction pour initialiser la carte Google Maps
function initMap() {
    const mapOptions = {
        center: { lat: 33.8838, lng: 10.8368 },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'VORTEX Festival Location'
    });
}

// Fonction pour afficher ou masquer le menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Écouteur d'événement pour fermer le menu lors du clic en dehors
document.addEventListener('click', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Appel de initMap lors du chargement de la page
window.addEventListener('load', initMap);
