//0
//ASK PROF: IS THERE A WAY TO PASS ARGUMENTS TO A FUNCTION IF SETTING USING ADD EVENT LISTENER? 
// or onclick = function?
let buttonOne = document.getElementById("buttonOne");
buttonOne.addEventListener("click", function() {
    document.getElementById("one").scrollIntoView();
});

let buttonTwo = document.getElementById("buttonTwo");
buttonTwo.addEventListener("click", function() {
    document.getElementById("two").scrollIntoView();
});

let buttonThree = document.getElementById("buttonThree");
buttonThree.addEventListener("click", function() {
    document.getElementById("three").scrollIntoView();
});

let buttonFour = document.getElementById("buttonFour");
buttonFour.addEventListener("click", function() {
    document.getElementById("four").scrollIntoView();
});

let buttonFive = document.getElementById("buttonFive");
buttonFive.addEventListener("click", function() {
    document.getElementById("five").scrollIntoView();
});

//1 -----------------------------------------------------------------------
let blue = document.getElementById("bluebutton");
blue.addEventListener("click", function() {
    document.getElementById("one").style.backgroundColor = "#35A6FC";
});
let green = document.getElementById("greenbutton");
green.addEventListener("click", function() {
    document.getElementById("one").style.backgroundColor = "#83b692";
});

//2 -----------------------------------------------------------------------
let button = document.getElementById("colorbutton");
let pink = true;
button.addEventListener("click", function() {
    if (pink) {
        document.getElementById("two").style.backgroundColor = "pink";
        button.innerText = "Click for orange!";
    } else {
        document.getElementById("two").style.backgroundColor = "orange";
        button.innerText = "Click for pink!";
    }
    pink = !pink;
});

//3 -----------------------------------------------------------------------
let submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    let input = document.getElementById("input");
    let list = document.getElementById("list1");
    let newli = document.createElement("li");
    newli.appendChild(document.createTextNode(input.value));
    list.appendChild(newli);

    input.value = '';
});

//4 -----------------------------------------------------------------------
let list = document.getElementById("list2");
list.addEventListener("click", function(which) {
    // console.log(which.target.innerText);
    list.removeChild(which.target);
});

//5 -----------------------------------------------------------------------
let list5 = document.getElementById("list3");
list5.addEventListener("click", function(which) {
    let items = list5.getElementsByTagName("li");
    for (x = items.length; x > 0; x--) {
        items[x - 1].style.backgroundColor = '';
    }
    which.target.style.backgroundColor = "red";
});