let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerHTML = "Final Assignment";
header.append(h1);

let linkBar = document.createElement('p');
linkBar.className = "link-bar";

let homeLink = document.createElement('p');
homeLink.id = "home-link";
homeLink.innerHTML = "Home";
linkBar.append(homeLink);

let mapLink = document.createElement('p');
mapLink.id = "map-link";
mapLink.innerHTML = "Map";
linkBar.append(mapLink);

header.append(linkBar);
document.body.append(header);