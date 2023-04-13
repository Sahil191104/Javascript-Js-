function BMI_Calculate() {
    let x = parseFloat(document.getElementById("demoheight").value);
    let y = parseFloat(document.getElementById("demoweight").value);
    
    let z = x/100;
    let w = z * z;
    let o = y/w;

    var newTable = document.getElementById('result');

    if (o < 16) {
        result.innerhtml
        alert(o + "Severe Thinness");
    } else if (o > 16 && o < 17) {
        alert(o + "Moderate Thinness");
    } else if (o > 17 && o < 18.5) {
        alert(o + "Mild Thinness");
    } else if (o > 18.5 && o < 25) {
        alert(o + "Normal");
    } else if (o > 25 && o < 30) {
        alert(o + "Overweight");
    } else if (o > 30 && o < 35) {
        alert(o + "Obese Class I");
    } else if (o > 35 && o < 40) {
        alert(o + "Obese Class II");
    } else if (o > 40) {
        alert(o + "Obese Class III");
    }

    location.reload();

}