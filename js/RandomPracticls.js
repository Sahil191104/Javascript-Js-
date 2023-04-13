let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML = x;
document.getElementById("num2").innerHTML = y;

let z = x + y;

function randome() {
    let o = parseInt(document.getElementById("demo3").value);

    if (z === o) {
        alert("true Answer");
    } else {
        alert("Wrong Answer!" + "The Corect Answer is " + z);
    }

    location.reload();

}