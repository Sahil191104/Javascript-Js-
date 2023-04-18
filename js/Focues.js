// if (btenmouse1 == '') {
//     document.getElementById("error").innerHTML = "The email address or mobile number you entered isn't connected to an account." + btenmouse1;
// }

let btenmouse1 = document.getElementById("email");
btenmouse1.addEventListener("blur", onblur);
btenmouse1.addEventListener("focus", onfocusm);

let btenmouse2 = document.getElementById("password");
btenmouse2.addEventListener("blur", onblur1);
btenmouse2.addEventListener("focus", onfocusm1);

function onblur() {
    if (isNaN(btenmouse1)) {
        // document.getElementById("email").value = "<i class=fa-solid fa-triangle-exclamation></i>";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "The email address or mobile number you entered isn't connected to an account.";
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
    if (btenmouse1) {
        document.getElementById("email").style.borderColor = "gray";
        document.getElementById("error").innerHTML = "";
    }
}

function onfocusm1() {
    if (btenmouse2) {
        document.getElementById("password").style.borderColor = "gray";
        document.getElementById("error1").innerHTML = "";
    }
}