let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

let z = x + y;

function randome() {
    parseInt(document.getElementById("nmu1")) = x;
    parseInt(document.getElementById("nmu2")) = y;

    let x = parseInt(document.getElementById("demo3").value);

    if (z === x) {
        alert("true Answer")
    } else {
        alert("Wrong Answer!" + "The Corect Answer is " + z);
    }

    location.reload();

}