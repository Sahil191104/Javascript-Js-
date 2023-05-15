let formregister = document.getElementById("dynamicForm");
let array = [];

const addbtn = () => {
    let froefform = document.getElementById("content");

    let rNo = Math.floor(Math.random() * 1000);

    let indiv = document.createElement("div");
    indiv.setAttribute("id","row" + rNo);

    let fname = document.createElement("input");
    fname.setAttribute("name", "fname")
    fname.setAttribute("id", "fname")
    fname.setAttribute("placeholder", "First Name")

    let lname = document.createElement("input");
    lname.setAttribute("name", "lname");
    lname.setAttribute("id", "lname");
    lname.setAttribute("placeholder", "Last Name");

    let btnplus = document.createElement("button");
    btnplus.setAttribute("id", "btn");
    let btnplusTex = document.createTextNode("+");
    btnplus.appendChild(btnplusTex);
    btnplus.setAttribute("onclick", "addbtn()");

    let btnminus = document.createElement("button");
    btnminus.setAttribute("id", "btn1");
    let btnminusTex = document.createTextNode("-");
    btnminus.appendChild(btnminusTex);
    btnminus.setAttribute("onclick", "removebtn(" + rNo + ")");

    indiv.appendChild(fname);
    indiv.appendChild(lname);
    indiv.appendChild(btnplus);
    indiv.appendChild(btnminus);

    froefform.appendChild(indiv);

    event.preventDefault("");
}

const removebtn = (rNo) => {
    let formremove = document.getElementById("row" + rNo);

    formremove.remove();

    array = [];

    event.preventDefault();
}

const handlerigistr = () => {
    let fnamedata = document.getElementsByName("fname");
    let lnamedata = document.getElementsByName("lname");

    array = [];

    for (let i=0; i<fnamedata.length; i++) {
        array.push({
            fname: fnamedata[i].value,
            lname: lnamedata[i].value
        });
    }

    console.log(array);

    event.preventDefault();
}

formregister.addEventListener("submit",handlerigistr);