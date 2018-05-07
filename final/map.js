function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.5072, lng: -122.2605 },
        zoom: 11
    });
    let coteLocation = new google.maps.Latlng(37.4977317, -122.262545);
    let cote = new google.maps.Marker({
        position: coteLocation,
        title: "Church of the Epiphany",
        map: map,
        visible: true
    });
    let bamco = new google.maps.Marker({
        position: { lat: 37.4220041, lng: -122.0928069 },
        title: "Bon Appetit @ Google",
        map: map
    });
    let zest = new google.maps.Marker({
        position: { lat: 37.502413, lng: -122.257134 },
        title: "Zest Bakery",
        map: map
    });
    let skc = new google.maps.Marker({
        position: { lat: 37.554319, lng: -122.3577962 },
        title: "Steve & Kate's Camp",
        map: map
    });
    let infa = new google.maps.Marker({
        position: { lat: 37.5113152, lng: -122.2069594 },
        title: "Informatica",
        map: map
    });
}