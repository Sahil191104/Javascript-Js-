function cgopaclick() {
    let x = parseFloat(document.getElementById("cgpa").value);

    if (x >= 9) {
        document.getElementById("answer").innerHTML = "The Grade is A";
    } else if (x >= 8.5 && x < 9) {
        document.getElementById("answer").innerHTML = "The Grade is B";
    } else if (x >= 8 && x < 8.5) {
        document.getElementById("answer").innerHTML = "The Grade is C";
    } else if (x >= 7.5 && x < 8) {
        document.getElementById("answer").innerHTML = "The Grade is D";
    } else if (x < 7.5) {
        document.getElementById("answer").innerHTML = "You are not eligible in Scholarship";
    }

    let y = document.getElementById("Cast_Criteria").value
    let a = document.getElementById("scholarship").value
    if (y == 'Open' && x >= 8.5) {
        z = (a * 0) / 100;
        n = a - z;
        document.getElementById("answer1").innerHTML = "The Not Calculate Scholarship is " + z;
        // document.getElementById("answer2").innerHTML = "You have to not pay " + n;
    } else if (y == 'OBC' && x >= 8.5) {
        z = (a * 25) / 100;
        n = a - z;
    } else if (y == 'SC' && x >= 8.5) {
        z = (a * 50) / 100;
        n = a - z;
    } else if (y == 'ST' && x >= 8.5) {
        z = (a * 100) / 100;
        n = a - z;
    }
    document.getElementById("answer1").innerHTML = "The Calculate Scholarship is " + z;
    document.getElementById("answer2").innerHTML = "You have to pay " + n;
}