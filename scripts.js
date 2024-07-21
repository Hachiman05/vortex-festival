// Fonction pour initialiser la carte Google Maps
function initMap() {
    const mapOptions = {
        center: { lat: 33.8838, lng: 10.8368 }, // Coordonnées de Djerba comme exemple
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true // Désactiver les contrôles par défaut
    };

    // Création de la carte
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Ajout d'un marqueur comme exemple
    new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'VORTEX Festival Location'
    });
}

// Fonction pour afficher ou masquer le menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    const isActive = nav.classList.contains('active');
    nav.classList.toggle('active', !isActive);
}

// Écouteur d'événement pour fermer le menu lors du clic en dehors
document.addEventListener('click', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Assurer que la fonction `initMap` est appelée lorsque la page est chargée
window.addEventListener('load', initMap);
