function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function initMap() {
    var djerba = { lat: 33.8076, lng: 10.8450 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: djerba
    });
    var marker = new google.maps.Marker({
        position: djerba,
        map: map
    });
}
