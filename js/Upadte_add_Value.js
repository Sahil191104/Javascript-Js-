let foremref = document.getElementById("todo-form");

let array = [];

const handeleInsert = () => {
    let val = document.getElementById("out").value;
    
    array.push(val);
    console.log(array);

    print = '<ul>';

    array.map((t) => {
        print += '<li>' + t + '<button>' + '<i class="fa-sharp fa-solid fa-trash"></i>' +'</button>' + '</li>';
    });

    print += '</ul>';

    document.getElementById("disp").innerHTML = print;

    event.preventDefault();
}

foremref.addEventListener("submit", handeleInsert);