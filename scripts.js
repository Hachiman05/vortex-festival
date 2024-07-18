// Fonction pour activer/désactiver le menu déroulant
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
// Fonction d'initialisation de la carte Google Maps
function initMap() {
    // Coordonnées de Djerba
    const djerba = { lat: 33.7925, lng: 10.8531 };

    // Création de la carte centrée sur Djerba
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: djerba,
    });

    // Marqueur pour indiquer la position de Djerba
    const marker = new google.maps.Marker({
        position: djerba,
        map: map,
        title: "Djerba, Tunisia",
    });
}
