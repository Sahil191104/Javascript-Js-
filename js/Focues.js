// if (btenmouse1 == '') {
//     document.getElementById("error").innerHTML = "The email address or mobile number you entered isn't connected to an account." + btenmouse1;
// }

let btenmouse1 = document.getElementById("email");
let btenmouse3 = document.getElementById("email");
btenmouse1.addEventListener("blur", onblur);
btenmouse3.addEventListener("keydown", onfocusm);

let btenmouse2 = document.getElementById("password");
let btenmouse4 = document.getElementById("password");
btenmouse2.addEventListener("blur", onblur1);
btenmouse4.addEventListener("keydown", onfocusm1);

function onblur() {
    if (isNaN(btenmouse1)) {
        // document.getElementById("icon").style.display = "block";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "The email address you entered isn't connected to an account.";
    }
}

function onblur1() {
    if (isNaN(btenmouse2)) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").innerHTML = "Wrong password. Try again or click Forgot password to reset it.";
    }
}

function onfocusm() {
    if (btenmouse3 === '') {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "The email address you entered isn't connected to an account.";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").innerHTML = "Wrong password. Try again or click Forgot password to reset it.";
    } else {
        document.getElementById("email").style.borderColor = "#d7d2cc";
        document.getElementById("error").innerHTML = "";
        document.getElementById("password").style.borderColor = "#d7d2cc";
        document.getElementById("error1").innerHTML = "";
    } 
}

function onfocusm1() {
    if (btenmouse4 === '') {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("error1").style.color = "red";
        document.getElementById("error1").innerHTML = "Wrong password. Try again or click Forgot password to reset it.";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "The email address you entered isn't connected to an account.";        
    } else {
        document.getElementById("password").style.borderColor = "#d7d2cc";
        document.getElementById("error1").innerHTML = "";
        document.getElementById("email").style.borderColor = "#d7d2cc";
        document.getElementById("error").innerHTML = "";
    }
}