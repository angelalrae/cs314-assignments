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

//#7
function longestString() {
    let inputString = prompt("Enter a list of strings separated by commas");
    if (inputString == null) {
        return;
    } else if (inputString == "") {
        alert("List should have at least one string");
    } else {
        let stringsArray = inputString.split(",");
        let longestStr = "";
        for (x in stringsArray) {
            stringsArray[x] = stringsArray[x].trim();
            if (stringsArray[x].length > longestStr.length) {
                longestStr = stringsArray[x];
            }
        }
        alert(longestStr);
    }
}
// longestString();

//#8
function largestEvenNumber() {
    let inputString = prompt("Enter a list of numbers separated by commas");
    if (inputString == null) {
        return;
    } else if (inputString == "") {
        alert("List should have at least one number");
    } else {
        let numArray = inputString.split(",");
        let largestEven = -1;
        for (x in numArray) {
            numArray[x] = numArray[x].trim();
            if (numArray[x] % 2 == 0 && numArray[x] > largestEven) {
                largestEven = numArray[x];
            }
        }
        if (largestEven == -1) {
            alert("No even numbers given")
        } else { alert(largestEven); }
    }
}
// largestEvenNumber();

//#9
function currentDayTime() {
    let now = new Date();

    let date = now.getDay();
    let day = "default";
    switch (date) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    let hours = now.getHours();
    let ampm = "AM";
    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    alert(`Today is ${day}\nIt is ${hours}:${minutes}${ampm}`);
}
// currentDayTime();

//#10
function unlimited(...args) {
    let outputStr = "";
    for (x in args) {
        outputStr += args[x];
    }
    alert(outputStr);
}
// unlimited("angela", "louise", "rae", "april", "5", "2018");
// unlimited();