function tip_balence() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);

    // let x = parseInt(document.getElementById("num1").vlaue);
    // let y = parseInt(document.getElementById("num2").vlaue);
    
    let z = x * y/100;
    let q = x + z;

    document.getElementById("num3").value = z;
    document.getElementById("num4").value = q;

    document.getElementById("num3").disabled = true;
    document.getElementById("num4").disabled = true;
}
