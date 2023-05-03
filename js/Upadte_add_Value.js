let foremref = document.getElementById("todo-form");

let array = [];
upadate =false;
uid = null;

const handeleInsert = () => {
    let val = document.getElementById("out").value;

    array.push(val);

    tabletodo();

    console.log("ssssss");

    document.getElementById("out").value = "";

    event.preventDefault();
}

const tabletodo = () => {
    print = '<ul>';

    array.map((t, i) => {
        print += '<li>' + t + '<button onclick="changetodo('+ i +')"><i class="fa-solid fa-pen-to-square"></i></button>' +'<button id="btn" onclick="deletbut(' + i + ')">' + '<i class="fa-sharp fa-solid fa-trash"></i>' + '</button>' + '</li>';
    });

    print += '</ul>';

    document.getElementById("disp").innerHTML = print;
}

const deletbut = (i) => {
    array.splice(i, 1);

    tabletodo();
}

const changetodo = (i) => {

    upadate = true;
    uid = i;

    document.getElementById("out").value = array[i];
}

const todonew = () => {
    console.log("dfhhh");

    let newval = document.getElementById("out").value

    array[uid] = newval;

    upadate = false;
    uid = null;

    document.getElementById("out").value = "";

    event.preventDefault();
}

const tododes = () => {
    if (upadate) {
        todonew();
    } else {
        handeleInsert();
    }

    event.preventDefault();
}

foremref.addEventListener("submit", tododes);