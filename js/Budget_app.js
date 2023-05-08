// form
let framtotal = document.createElement("form");
let h3 = document.createElement("h3");
let h3tex = document.createTextNode("Budget");
let framinput1 = document.createElement("input");
let framinput2 = document.createElement("input");
let framtotal_1 = document.createElement("form");
let h3_1 = document.createElement("h3");
let h3tex_1 = document.createTextNode("Expenses");
let framinput1_1 = document.createElement("input");
let framinput1_2 = document.createElement("input");
let framinput2_1 = document.createElement("input");
let framdiv = document.createElement("p");
let framoutput = document.createElement("div");

framtotal.setAttribute("id","total-amount");
framinput1.setAttribute("type","number");
framinput1.setAttribute("id","budgetinput");
framinput1.setAttribute("placeholder","Enter Total Amount");
framinput2.setAttribute("type","submit");
framinput2.setAttribute("id","sub");
framtotal_1.setAttribute("id","total-amount1");
framinput1_2.setAttribute("type","text");
framinput1_1.setAttribute("type","number");
framinput1_1.setAttribute("id","budgetinput1-1");
framinput1_2.setAttribute("id","budgetinput1");
framinput1_1.setAttribute("placeholder","Enter Total Expenses");
framinput1_2.setAttribute("placeholder","Enter Product Name");
framinput2_1.setAttribute("type","submit");
framinput2_1.setAttribute("id","sub1");
framdiv.setAttribute("id","dis");
framoutput.setAttribute("id","output-container flex-space");

let divref = document.getElementById("sub-container");

framtotal.appendChild(h3tex);
divref.appendChild(framtotal);
framtotal.appendChild(framinput1);
divref.appendChild(framtotal);
framtotal.appendChild(framinput2);
divref.appendChild(framtotal);
framtotal.appendChild(framdiv);
divref.appendChild(framtotal);

framtotal_1.appendChild(h3tex_1);
divref.appendChild(framtotal_1);
framtotal_1.appendChild(h3tex_1);
divref.appendChild(framtotal_1);
framtotal_1.appendChild(framinput1_2);
divref.appendChild(framtotal_1);
framtotal_1.appendChild(framinput1_1);
divref.appendChild(framtotal_1);
framtotal_1.appendChild(framinput2_1);
divref.appendChild(framtotal_1);
framtotal_1.appendChild(framdiv);
divref.appendChild(framtotal_1);

let fremmaininput = document.getElementById("total-amount");
let fremexpenses = document.getElementById("total-amount1");
let arr = [];

const clicka = () => {
    let val = document.getElementById("budgetinput").value;
    let val1 = document.getElementById("budgetinput1-1").value;
    let val2 = document.getElementById("budgetinput1").value;

    arr.push(val);
    console.log(arr);

    console.log(val2);
    let ans = val - val1;
    if (val === '' || val1 === '' || ans === '' ) {
        document.getElementById("amount").innerHTML = "$" + "0";
        document.getElementById("expenititire-value").innerHTML = "$" + "0";
        document.getElementById("Balance-amount").innerHTML = "$" + "0";
    }
    document.getElementById("amount").innerHTML = "$" + val;
    document.getElementById("expenititire-value").innerHTML = "$" + val1;
    document.getElementById("Balance-amount").innerHTML = "$" + ans;

    document.getElementById("budgetinput").value = "";
    document.getElementById("budgetinput1-1").value = "";
    document.getElementById("budgetinput1").value = "";

    tabletodo();

    document.getElementById("list").innerHTML = val2;

    event.preventDefault();
}

const tabletodo = () => {
    let print = '<ol>';

    arr.map((t, i) => {
        print += '<li>' + t + '<button onclick="changetodo(' + i + ')"><i class="fa-solid fa-pen-to-square"></i></button>' + '<button id="btn" onclick="deletbut(' + i + ')">' + '<i class="fa-sharp fa-solid fa-trash"></i>' + '</button>' + '</li>';
    });

    print += '</ol>';

    document.getElementById("list").innerHTML = print;
}

const expenses = () => {

}

fremmaininput.addEventListener("submit", clicka);
fremexpenses.addEventListener("submit", expenses);