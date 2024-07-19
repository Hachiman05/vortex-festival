function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

// Initialize the map
function initMap() {
    var location = { lat: 33.8076, lng: 10.8472 }; // Djerba, Tunisia
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
