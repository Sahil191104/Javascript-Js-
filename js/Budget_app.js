let expensesref = document.getElementById("total-amount");
let expensesrefsed = document.getElementById("total-amount1");
let expensess = [];
let budgetValue = 0;
let upadate = false;
let uid = null;

const handlebom = () => {
    let budget_dataelem = document.createElement("span");
    let budget_dataelem1 = document.createElement("span");
    let expenses_dataelem = document.createElement("span");
    let expenses_dataelem1 = document.createElement("span");
    let balance_dataelem = document.createElement("span");
    let balance_dataelem1 = document.createElement("span");

    budget_dataelem.setAttribute("id", "size1");
    budget_dataelem1.setAttribute("id", "size");
    expenses_dataelem.setAttribute("id", "size4");
    expenses_dataelem1.setAttribute("id", "size3");
    balance_dataelem.setAttribute("id", "size2");
    balance_dataelem1.setAttribute("id", "size5");

    let budget_datatax1 = document.createTextNode("$0");
    let expenses_datatax1 = document.createTextNode("$0");
    let balance_datatax1 = document.createTextNode("$0");

    let budget_dataRef = document.getElementById("amount");
    let expenses_dataRef = document.getElementById("expenititire-value");
    let balance_dataRef = document.getElementById("Balance-amount");
    let budgetref = document.getElementById("sub");

    budget_dataelem1.appendChild(budget_datatax1);
    budget_dataRef.appendChild(budget_dataelem);
    budget_dataRef.appendChild(budget_dataelem1);
    expenses_dataelem1.appendChild(expenses_datatax1);
    expenses_dataRef.appendChild(expenses_dataelem);
    expenses_dataRef.appendChild(expenses_dataelem1);
    balance_dataelem1.appendChild(balance_datatax1);
    balance_dataRef.appendChild(balance_dataelem);
    balance_dataRef.appendChild(balance_dataelem1);

    budgetref.addEventListener("click", handlebudget);
}

function handlebudget() {
    let x = document.getElementById("budgetinput").value;
    budgetValue = x;
    console.log(x);
    document.getElementById("size").innerHTML = x;
    document.getElementById("size5").innerHTML = x;
    document.getElementById("budgetinput").value = "";
    event.preventDefault();
}

const handledata = () => {
    let y = 0;
    let sum = 0;

    expensess.map((a) => sum += parseInt(a.cost));
    console.log(sum);

    y = budgetValue - sum;

    document.getElementById("size3").innerHTML = sum;
    document.getElementById("size5").innerHTML = y;
}

const handletable = (name, value, randomnum) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    tr.setAttribute("id", "row" + randomnum);

    let tdvle = document.createTextNode(name);
    let tdvle1 = document.createTextNode(value);

    let button = document.createElement("button");
    // button.classList.add("fa-solid","fa-pen-to-square","edit");
    // button.style.outline = "none";
    // button.style.border = "none";
    button.setAttribute("onclick", "handleedit(" + randomnum + ")");
    let btn = document.createTextNode("Edit");

    let button1 = document.createElement("button");
    // button1.classList.add("fa-solid","fa-trash-can","delete");
    // button1.style.outline = "none";
    // button1.style.border = "none";
    button1.setAttribute("onclick", "handledelete(" + randomnum + ")");
    let btn1 = document.createTextNode("delete")

    let tableref = document.getElementById("tablebody");

    td.appendChild(tdvle);
    tr.appendChild(td);
    td1.appendChild(tdvle1);
    tr.appendChild(td1);
    button.appendChild(btn);
    button1.appendChild(btn1);
    td2.appendChild(button);
    td2.appendChild(button1);

    tr.appendChild(td2);

    tableref.appendChild(tr);
}

const handledelete = (randomnum) => {
    let trref = document.getElementById("row" + randomnum);
    console.log(trref);
    trref.remove();

    // let fData = expensess.filter((a,i) => a.id === randomnum);

    expensess.map((a, i) => {
        if (a.id === randomnum) {
            expensess.splice(i, 1);
        }
    });

    // console.log(fData);

    handledata();
}

const handleedit = (id) => {
    console.log("rbfgn");

    let frdata = expensess.filter((a,i) => a.id === id);

    console.log(frdata);

    let fname = frdata[0].name;
    let fcost = frdata[0].cost;

    console.log(fname);
    console.log(fcost);

    document.getElementById("budgetinput1").value = fname;
    document.getElementById("budgetinput1-1").value = fcost;

    upadate = true;
    uid = id;
}

const handleexpeses = () => {
    let expnameref = document.getElementById("budgetinput1").value;
    let expvalueref = document.getElementById("budgetinput1-1").value;
    // console.log(expvalueref,expnameref);

    let randomnum = Math.floor(Math.random() * 100);
    console.log(randomnum);

    expensess.push({
        id: randomnum,
        name: expnameref,
        cost: expvalueref
    });

    console.log(expensess);

    document.getElementById("budgetinput1").value = '';
    document.getElementById("budgetinput1-1").value = '';

    // document.getElementById("table1").style.display = "inline-block";

    handletable(expnameref, expvalueref, randomnum);
    handledata();
    event.preventDefault();
}

const handlenew = () => {
    console.log("Upadate");
    let newname = document.getElementById("budgetinput1").value;
    let newcost = document.getElementById("budgetinput1-1").value;

    let uData = expensess.map((a) => {
        if (a.id === uid) {
            return {
                id:uid,
                name:newname,
                cost:newcost
            }
        } else {
            return a;
        }
    });

    console.log(uData);
}

const handeldis = () => {
    if (upadate) {
        handlenew();
    } else {
        handleexpeses();
    }

    event.preventDefault();
}

expensesrefsed.addEventListener("submit", handeldis);
expensesref.addEventListener("submit", handleexpeses);
window.onload = handlebom();