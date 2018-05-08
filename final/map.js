function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.5072, lng: -122.2605 },
        zoom: 11
    });

    let coteContent = '<div class="info_content"><h3>Church of the Epiphany</h3><p>Angela\'s first "job" volunteering at church.</p></div>'
    var coteInfo = new google.maps.InfoWindow({
        content: coteContent
    });
    let cote = new google.maps.Marker({
        position: { lat: 37.4977317, lng: -122.262545 },
        title: "Church of the Epiphany",
        map: map
    });
    cote.addListener('click', function() {
        coteInfo.open(map, this);
    });

    let bamcoContent = '<div class="info_content"><h3>Bon Appetit @ Google</h3><p>Angela worked for Google\'s catering company the summer before her senior year of high school.</p></div>'
    var bamcoInfo = new google.maps.InfoWindow({
        content: bamcoContent
    });
    let bamco = new google.maps.Marker({
        position: { lat: 37.4220041, lng: -122.0928069 },
        title: "Bon Appetit @ Google",
        map: map
    });
    bamco.addListener('click', function() {
        bamcoInfo.open(map, this);
    });

    let zestContent = '<div class="info_content"><h3>Zest</h3><p>After graduating from high school, Angela worked at a gluten-free bakery for the summer.</p></div>'
    var zestInfo = new google.maps.InfoWindow({
        content: bamcoContent
    });
    let zest = new google.maps.Marker({
        position: { lat: 37.502413, lng: -122.257134 },
        title: "Zest Bakery",
        map: map
    });
    zest.addListener('click', function() {
        zestInfo.open(map, this);
    });

    let skcContent = '<div class="info_content"><h3>Steve & Kate\'s Camp</h3><p>For the last two summers, Angela has worked as the head cook at a kid\'s summer day camp.</p></div>'
    var skcInfo = new google.maps.InfoWindow({
        content: skcContent
    });
    let skc = new google.maps.Marker({
        position: { lat: 37.554319, lng: -122.3577962 },
        title: "Steve & Kate's Camp",
        map: map
    });
    skc.addListener('click', function() {
        skcInfo.open(map, this);
    })

    let infaContent = '<div class="info_content"><h3>Informatica, LLC</h3><p>This summer, Angela will be working as a technical writing intern for Informatica.</p></div>'
    var infaInfo = new google.maps.InfoWindow({
        content: infaContent
    });
    let infa = new google.maps.Marker({
        position: { lat: 37.5113152, lng: -122.2069594 },
        title: "Informatica",
        map: map
    });
    infa.addListener('click', function() {
        infaInfo.open(map, this);
    });
}