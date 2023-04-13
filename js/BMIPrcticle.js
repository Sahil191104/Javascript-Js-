function bmi() {
    let w = parseFloat(document.getElementById("weight").value)
    let h = parseFloat(document.getElementById("height").value)

    let z = h / 100;
    let y = w / (z * z);

    document.getElementById("bmigh").innerHTML = y;

    migh.document = y.toFixed(2);

    if (y < 18.5) {
        document.getElementById("sms").innerHTML = "(Underweight)";
    } else if (y >= 18.5 && y <= 24.9) {
        document.getElementById("sms").innerHTML = "(Normal weight)";
    } else if (y >= 25 && y <= 25.9) {
        document.getElementById("sms").innerHTML = "(Overweight)";
    } else if (y >= 30) {
        document.getElementById("sms").innerHTML = "(Obesity)";
    }
}