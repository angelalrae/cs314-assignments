"use strict";

//#4
function partFour() {
    let confirmResponse = confirm("Are you there?");
    if (confirmResponse) {
        console.log("it is true");
    } else {
        console.log("it is false");
    }
}

//#5
function partFive() {
    let confirmResponse = confirm("Are you there?") ? console.log("it is true") : console.log("it is false");
}

//#6
partFour();
partFive();

//#7
function partSeven() {
    let x = prompt("Enter a number");
    if (x == null) {
        alert("cancel clicked");
    } else if (x == '') {
        alert("nothing entered");
    } else {
        parseFloat(x);
        if (isNaN(x)) {
            alert("string entered");
        } else { alert(x + " entered"); }
    }
}

//#8
partSeven();

//#9
function makeObject(name, age) {
    this.name = name;
    this.age = age;
    this.printName = function() { return `Hello ${this.name}` };
}

//#10
function copyObject(object, key = "none", value = "none") {
    let newObject = Object.assign({}, object);
    if (key !== "none") {
        newObject[key] = value;
    }
    return newObject;
}

//#11
let angela = new makeObject("rae", 20);

//#12
let spike = new copyObject(angela, "city", "spokane");

//#13
console.log("original object: " + angela);
console.log("new object: " + spike);

//#14
console.log(angela.name + ' ' + angela.age + ' ' + angela.printName());
console.log(spike.name + ' ' + spike.age + ' ' + spike.printName() + ' ' + spike.city);

//#15
function partFifteen(str1, str2, str3 = "default") {
    if (str3 == "default")
        return str1 + str2;
    else return str1 + str2 + str3;
}
console.log(partFifteen("angela", "rae"));
console.log(partFifteen("angela", "louise", "rae"));

//#16
let partSixteen = function(str1, str2, str3 = "default") {
    if (str3 == "default")
        return str1 + str2;
    else return str1 + str2 + str3;
}
console.log(partSixteen("angela", "rae"));
console.log(partSixteen("angela", "louise", "rae"));

//#17
let partSeventeen = (str1, str2, str3 = "default") => str3 == "default" ? str1 + str2 : str1 + str2 + str3;
console.log(partSeventeen("angela", "rae"));
console.log(partSeventeen("angela", "louise", "rae"));