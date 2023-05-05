let foremref = document.getElementById("todo-form");

let array = [];
upadate = false;
uid = null;

const handeleInsert = () => {
    let val = document.getElementById("out").value;
    let locadata = JSON.parse(localStorage.getItem("todo"));

    if (locadata) {
        locadata.push(val);
        localStorage.setItem("todo", JSON.stringify(locadata));
    } else {
        array.push(val);
        localStorage.setItem("todo", JSON.stringify(array));
    }

    tabletodo();

    document.getElementById("out").value = "";

    event.preventDefault();
}

const tabletodo = () => {
    let locadata = JSON.parse(localStorage.getItem("todo"));

    if (locadata) {
        let print = '<ol>';

        locadata.map((t, i) => {
            print += '<li>' + t + '<button onclick="changetodo(' + i + ')"><i class="fa-solid fa-pen-to-square"></i></button>' + '<button id="btn" onclick="deletbut(' + i + ')">' + '<i class="fa-sharp fa-solid fa-trash"></i>' + '</button>' + '</li>';
        });

        print += '</ol>';

        document.getElementById("disp").innerHTML = print;
    }

}

const deletbut = (i) => {
    let locadata = JSON.parse(localStorage.getItem("todo"));

    locadata.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(locadata));

    tabletodo();
}

const changetodo = (i) => {
    let locadata = JSON.parse(localStorage.getItem("todo"));

    upadate = true;
    uid = i;

    document.getElementById("out").value = locadata[i];
}

const todonew = () => {
    let locadata = JSON.parse(localStorage.getItem("todo"));

    let newval = document.getElementById("out").value

    locadata[uid] = newval;

    upadate = false;
    uid = null;
    localStorage.setItem("todo", JSON.stringify(locadata));

    document.getElementById("out").value = "";

    tabletodo();

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

window.onload = tabletodo;