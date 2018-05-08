let foodButton = document.getElementById("foodButton");
foodButton.addEventListener('click', () => {
    var foodSection = document.getElementById("food");
    var techSection = document.getElementById("tech");
    var serviceSection = document.getElementById("service");
    foodSection.style.display = "inline";
    techSection.style.display = "none";
    serviceSection.style.display = "none";
});

let techButton = document.getElementById("techButton");
techButton.addEventListener('click', () => {
    var foodSection = document.getElementById("food");
    var techSection = document.getElementById("tech");
    var serviceSection = document.getElementById("service");
    foodSection.style.display = "none";
    techSection.style.display = "inline";
    serviceSection.style.display = "none";
});

let serviceButton = document.getElementById("serviceButton");
serviceButton.addEventListener('click', () => {
    var foodSection = document.getElementById("food");
    var techSection = document.getElementById("tech");
    var serviceSection = document.getElementById("service");
    foodSection.style.display = "none";
    techSection.style.display = "none";
    serviceSection.style.display = "inline";
});