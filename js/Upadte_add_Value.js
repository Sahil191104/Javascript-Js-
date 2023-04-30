arr = [];


const todoData = () =>{

// console.log(arr);

let val = document.getElementById("todo").value;

console.log(val);

document.getElementById("ans").innerHTML = val;
document.getElementById("ans").style.display = 'block';
document.getElementById("i").style.display = 'block'

arr.push(val);
console.log(arr);

let a = arr;

parseInt(document.getElementById("ans").innerHTML  = a);

// console.log(a);

}

const remove = () =>{
    document.getElementById("ans").innerHTML = '';
    document.getElementById("i").innerHTML = '';
}