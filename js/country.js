function contryhandle() {
    let x = document.getElementById("contry").value;

    if (x === 'select') {
        document.getElementById("print").innerHTML = "The contry select is " + x;
        document.getElementById("bodycololr").style.backgroundColor = "white"
    } else if (x === 'uk') {
        document.getElementById("print").innerHTML = "The contry select is " + x;
        document.getElementById("bodycololr").style.backgroundColor = "red"
    } else if (x === 'us') {
        document.getElementById("print").innerHTML = "The contry select is " + x;
        document.getElementById("bodycololr").style.backgroundColor = "gray"
    } else if (x === 'london') {
        document.getElementById("print").innerHTML = "The contry select is " + x;
        document.getElementById("bodycololr").style.backgroundColor = "green"
    } else if (x === 'america') {
        document.getElementById("print").innerHTML = "The contry select is " + x;
        document.getElementById("bodycololr").style.backgroundColor = "blue"
    } 
}