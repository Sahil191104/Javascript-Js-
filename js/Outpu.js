// alert("Hello World");

document.getElementById("title").innerHTML = "Bitkhanan IT Education";
document.getElementById("title").style.color = "red";

let x = parseInt(prompt("Please enter any Number", "0"));
let y = parseInt(prompt("Please enter any Number"));

let z = x + y;

// console.log(z);

if (z %2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}