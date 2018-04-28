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
    userName.innerHTML = user.name;
    let userEmail = document.createElement('p');
    userEmail.innerHTML = "Email: " + user.email;
    let userCompany = document.createElement('p');
    userCompany.innerHTML = "Company: " + user.company.name;

    let todosButton = document.createElement('button');
    todosButton.className = "todos-button";
    todosButton.id = user.id + "-todosbutton";
    todosButton.innerHTML = 'To Dos';
    todosButton.firstClick = true;
    todosButton.addEventListener("click", showTodos);

    let albumsButton = document.createElement('button');
    albumsButton.className = "album-button";
    albumsButton.id = user.id + "-albumbutton";
    albumsButton.innerHTML = 'Albums';
    albumsButton.firstClick = true;
    albumsButton.addEventListener("click", showAlbums);
    var albumsClicked = false;

    $('.content').append(userContainer);
    $(`#${user.id}`).append(userName);
    $(`#${user.id}`).append(userEmail);
    $(`#${user.id}`).append(userCompany);
    $(`#${user.id}`).append(todosButton);
    $(`#${user.id}`).append(albumsButton);
}


function showTodos() {
    let id = this.parentNode.id;

    //hide albums if they are shown
    let albums = this.parentElement.getElementsByClassName("albums-section");
    $(albums).hide(500);

    //on first click, create section and add todo items
    if (this.firstClick) {
        let todosSection = document.createElement('section');
        todosSection.className = "todo-section";
        let todoList = document.createElement('ul');

        //get todos from API
        $(function() {
            //gets all data on every call?
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/todos",
                type: "GET",
                success: function(data) {
                    //loop through API to find todos with userId same as section id
                    let index = 0;
                    while (data[index].userId != id) {
                        index++;
                    }

                    //for every todo with the same userId, add todo to list
                    let currentTodo = data[index];
                    while (currentTodo.userId == id) {
                        currentTodo = data[index];
                        let newTodo = document.createElement('li');
                        newTodo.style.listStyleImage = "url('images/circle.png')";
                        newTodo.done = false;
                        newTodo.addEventListener("click", todoClick);
                        newTodo.innerHTML = currentTodo.title;
                        todosSection.append(newTodo);
                        index++;
                    }
                }
            });
        });
        this.parentNode.append(todosSection);
        this.firstClick = false;
    }
    //on subsequent calls, toggle section
    else {
        let section = this.parentElement.getElementsByClassName("todo-section");
        $(section).toggle(500);
    }
}

//when a todo item is clicked, toggle between checked and unchecked
function todoClick() {
    if (!this.done) {
        this.style.listStyleImage = "url('images/circle-with-check-symbol.png')";
    } else {
        this.style.listStyleImage = "url('images/circle.png')";
    }
    this.done = !this.done;
}

function showAlbums() {
    let id = this.parentNode.id;

    //hide todos if they are shown
    let todos = this.parentElement.getElementsByClassName("todo-section");
    $(todos).hide(500);

    //on first click, create section and add albums
    if (this.firstClick) {
        let albumsSection = document.createElement('section');
        albumsSection.className = "albums-section";
        let albumsList = document.createElement('ol');

        //get albums from API
        $(function() {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/albums",
                type: "GET",
                success: function(data) {
                    //loop through API to find album with userId same as section id
                    let index = 0;
                    while (data[index].userId != id) {
                        index++;
                    }

                    //for every album with the same userId, add album to list
                    let currentAlbum = data[index];
                    while (currentAlbum.userId == id) {
                        currentAlbum = data[index];
                        let newAlbum = document.createElement('li');
                        newAlbum.innerHTML = currentAlbum.title;
                        albumsSection.append(newAlbum);
                        index++;
                    }
                }
            });
        });
        this.parentNode.append(albumsSection);
        this.firstClick = false;
    }
    //on subsequent clicks, toggle on/off the section
    else {
        let section = this.parentElement.getElementsByClassName("albums-section");
        $(section).toggle(500);
    }
}