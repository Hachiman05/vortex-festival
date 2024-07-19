// script.js

// Function to initialize the Google Map
function initMap() {
    const location = { lat: 33.8076, lng: 10.8515 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
