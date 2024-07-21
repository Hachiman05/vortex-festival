function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(46.603354, 1.888334),
        zoom: 6
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
