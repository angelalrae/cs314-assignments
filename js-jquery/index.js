$(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function(data) {
            for (let user of data) {
                createUser(user);
            }
        }
    });
});

function createUser(user) {
    //create container for each user
    let userContainer = document.createElement('div');
    userContainer.className = "user-container";
    userContainer.id = user.id;

    //add name, email, and company
    let userName = document.createElement('h3');
    userName.innerHTML = user.username;
    let userEmail = document.createElement('p');
    userEmail.innerHTML = "Email: " + user.email;
    let userCompany = document.createElement('p');
    userCompany.innerHTML = "Company: " + user.company.name;

    let todosButton = document.createElement('button');
    todosButton.className = "todos-button";
    todosButton.innerHTML = 'To Dos';
    todosButton.click(showTodos);

    let albumsButton = document.createElement('button');
    albumsButton.className = "album-button";
    albumsButton.innerHTML = 'Albums';
    albumsButton.click(showAlbums);

    $('.content').append(userContainer);
    $(`#${user.id}`).append(userName);
    $(`#${user.id}`).append(userEmail);
    $(`#${user.id}`).append(userCompany);
    $(`#${user.id}`).append(todosButton);
    $(`#${user.id}`).append(albumsButton);
}


function showTodos() {
    console.log("show todos");
}

function showAlbums() {
    console.log("show albums");
}