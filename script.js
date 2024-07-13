// Fonction d'initialisation de la carte Google Maps
function initMap() {
    // Coordonnées de Djerba
    var djerba = { lat: 33.8219, lng: 10.9916 };

    // Création de la carte centrée sur Djerba
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: djerba
    });

    // Marqueur pour indiquer l'emplacement du festival
    var marker = new google.maps.Marker({
        position: djerba,
        map: map,
        title: 'VORTEX Festival'
    });
}
