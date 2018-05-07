let header = document.createElement('header');
let h1 = document.createElement('h1');
h1.innerHTML = "Final Assignment";
header.append(h1);

let linkBar = document.createElement('section');
linkBar.className = "link-bar";

let homeLink = document.createElement('a');
homeLink.id = "home-link";
homeLink.innerHTML = "Home";
homeLink.href = "index.html";
linkBar.append(homeLink);

let formLink = document.createElement('a');
formLink.id = "form-link";
formLink.innerHTML = "Form";
formLink.href = "form.html";
linkBar.append(formLink);

let mapLink = document.createElement('a');
mapLink.id = "map-link";
mapLink.innerHTML = "Map";
mapLink.href = "map.html";
linkBar.append(mapLink);

let apiLink = document.createElement('a');
apiLink.id = "api-link";
apiLink.innerHTML = "API";
apiLink.href = "api.html";
linkBar.append(apiLink);

header.append(linkBar);
document.body.append(header);