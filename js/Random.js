let w = parseInt(document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10));
let y = parseInt(document.getElementById("demo1").innerHTML = Math.floor(Math.random() * 10));

let z = w + y;

function randome() {
    let x = parseInt(document.getElementById("demo3").value);

    console.log(x, z);

    if (z == x) {
        alert("true Answer")
    } else {
        alert("Wrong Answer!" + "The Corect Answer is " + z);
    }

    location.reload();
    
}