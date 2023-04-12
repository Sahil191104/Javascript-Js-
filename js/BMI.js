function BMI_Calculate() {
    let x = parseFloat(document.getElementById("demoheight").value);
    let y = parseFloat(document.getElementById("demoweight").value);
    
    let z = x/100;
    let w = z * z;
    let o = y/w;

    if (o < 16) {
        alert(o);
        alert("Severe Thinness");
    } else if (o > 16 && o < 17) {
        alert(o);
        alert("Moderate Thinness");
    } else if (o > 17 && o < 18.5) {
        alert(o);
        alert("Mild Thinness");
    } else if (o > 18.5 && o < 25) {
        alert(o);
        alert("Normal");
    } else if (o > 25 && o < 30) {
        alert(o);
        alert("Overweight");
    } else if (o > 30 && o < 35) {
        alert(o);
        alert("Obese Class I");
    } else if (o > 35 && o < 40) {
        alert(o);
        alert("Obese Class II");
    } else if (o > 40) {
        alert(o);
        alert("Obese Class III");
    }
}