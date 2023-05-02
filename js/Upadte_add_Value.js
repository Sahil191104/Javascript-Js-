let foremref = document.getElementById("todo-form");
let foremdelet = document.getElementById("disp");

let array = [];

const handeleInsert = () => {
    let val = document.getElementById("out").value;
    
    array.push(val);
    console.log(array);

    print = '<ul>';

    array.map((t) => {
        print += '<li>' + t + '<button id="btn">' + '<i class="fa-sharp fa-solid fa-trash"></i>' +'</button>' + '</li>';
    });

    print += '</ul>';

    document.getElementById("disp").innerHTML = print;

    event.preventDefault();
}

foremref.addEventListener("submit", handeleInsert);

const deletbut = () => {
    // for (let i=0; i<foremdelet.length; i++) {
    //     foremdelet[i].onclik = function() {
    //         this.parentNode.removeChild
    //     }
    // }
    document.getElementById("disp").style.display = "none";
}

foremdelet.addEventListener("click", deletbut);