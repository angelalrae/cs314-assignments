//#1
function charSwap() {
    let inputString = prompt("Enter a string to swap");

    //check input type and length
    if (typeof(inputString) != "string") {
        alert("Input must be a string");
    } else if (inputString.length < 2) {
        alert("String is not long enough")
    } else { //if a string with 2+ characters,
        let newString;
        inputString.toString();

        //get the first and last characters
        let firstChar = inputString.slice(0, 1);
        let lastChar = inputString.slice(inputString.length - 1);

        //delete first and last characters
        newString = inputString.substring(1);
        newString = newString.substring(0, newString.length - 1);

        //return new string
        return lastChar + newString + firstChar;
    }
}
// console.log(charSwap());

//#2
function hiString() {
    let inputString = prompt("Enter a string");
    if (inputString == null) {
        return;
    } else if (inputString.length < 1) {
        alert("Input must be at least one character");
    } else if (inputString.startsWith("Hi")) {
        return inputString;
    } else {
        let newString = "Hi " + inputString;
        return newString;
    }
}
// console.log(hiString());

//#3
function threeCharsToFront() {
    let inputString = prompt("Enter a string");
    if (inputString == null) {
        return;
    } else if (inputString.length < 4) {
        alert("Input must be at least four character");
    } else {
        let beginning = inputString.substring(0, inputString.length - 3);
        let lastThree = inputString.substring(inputString.length - 3);
        return lastThree + beginning;
    }
}
// console.log(threeCharsToFront());

//#4
function stringToSentence() {
    let inputString = prompt("Enter a list of items separated by commas");
    if (inputString == null) {
        return;
    } else {
        let itemsArray = inputString.split(",");
        let outputStr = ``;
        for (x in itemsArray) {
            itemsArray[x] = itemsArray[x].trim();
            outputStr += `${itemsArray[x]} `
        }
        alert(outputStr);
    }
}
// stringToSentence();

//#5
function upperLower() {
    let inputString = prompt("Enter a string");
    if (inputString == null) {
        return;
    } else if (inputString.length > 3) {
        let firstThree = inputString.substr(0, 3);
        let ending = inputString.substring(3);
        firstThree = firstThree.toLowerCase();
        return firstThree + ending;
    } else {
        return inputString.toUpperCase();
    }
}
// console.log(upperLower());

//#6
function integerSwap() {
    let inputString = prompt("Enter a list of integers separated by commas");
    if (inputString == null) {
        return;
    } else if (inputString == "") {
        alert("List should have at least one number");
    } else {
        let intArray = inputString.split(",");
        for (x in intArray) {
            intArray[x] = intArray[x].trim();
        }
        let temp = intArray[0];
        intArray[0] = intArray[intArray.length - 1];
        intArray[intArray.length - 1] = temp;
        alert(intArray);
    }
}
// integerSwap();