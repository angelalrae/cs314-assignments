//check that something was entered for name
let name = document.getElementById("name");
name.onblur = function() {
    if (name.value == "") {
        name.style.border = "1.4px solid #ce2f13";
    } else {
        name.style.border = "1.4px solid #343434";
        document.getElementById("name-error").style.display = "none";
    }
};

//validate email
//code from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
var emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = document.getElementById("email");
email.onblur = function() {
    if (emailCheck.test(email.value)) {
        email.style.border = "1.4px solid #343434";
        document.getElementById("email-error").style.display = "none";
    } else {
        email.style.border = "1.4px solid #ce2f13";
    }
};

//validate 9-number phone number
//code from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
var phoneCheck = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
let phone = document.getElementById("phone");
phone.onblur = function() {
    if (phoneCheck.test(phone.value)) {
        phone.style.border = "1.4px solid #343434";
        document.getElementById("phone-error").style.display = "none";
    } else {
        phone.style.border = "1.4px solid #ce2f13";
    }
};

//check values on submit
let button = document.getElementById("send");
button.addEventListener("click", () => {
    $('form').submit();
});
$('form').submit((event) => {
    event.preventDefault();
    //if name not submitted, present error message, otherwise hide
    if (name.value == "") {
        document.getElementById("name-error").style.display = "inline";
    } else {
        document.getElementById("name-error").style.display = "none";
    }
    //if not valid email, present error message, otherwise hide
    if (!emailCheck.test(email.value)) {
        document.getElementById("email-error").style.display = "inline";
    } else {
        document.getElementById("email-error").style.display = "none";
    }
    //if not valid phone number, present error message, otherwise hide
    if (!phoneCheck.test(phone.value)) {
        document.getElementById("phone-error").style.display = "inline";
    } else {
        document.getElementById("phone-error").style.display = "none";
    }
    //if no message, error message
    let message = document.getElementById("message");
    if (message.value == "") {
        document.getElementById("message-error").style.display = "inline";
        message.style.border = "1.4px solid #ce2f13";
    } else {
        document.getElementById("message-error").style.display = "none";
        message.style.border = "1.4px solid #343434";
    }
})