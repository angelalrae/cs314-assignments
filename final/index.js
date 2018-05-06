function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.5072, lng: -122.2605 },
        zoom: 12
    });
}

document.getElementById("map-link").addEventListener("click", () => {
    document.getElementById("map").style.display = "block";
});

document.getElementById("home-link").addEventListener("click", () => {
    if (document.getElementById("map").style.display === "block") {
        document.getElementById("map").style.display = "none";
    }
});