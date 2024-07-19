// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('nav.menu');
    menu.classList.toggle('active');
}

// Initialize Google Map
function initMap() {
    // Map options
    const options = {
        zoom: 15,
        center: { lat: 33.8823, lng: 10.8453 } // Coordinates for Djerba, adjust as needed
    };

    // Create a new map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Marker
    const marker = new google.maps.Marker({
        position: { lat: 33.8823, lng: 10.8453 }, // Coordinates for Djerba, adjust as needed
        map: map,
        title: 'VORTEX Festival Location'
    });
}

// Event listener for document ready
document.addEventListener('DOMContentLoaded', function() {
    // Any additional JavaScript code can go here
});
