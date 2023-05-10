let expensesref = document.getElementById("total-amount1");
let expensess = [];

const handlebom = () => {
    let budget_dataelem = document.createElement("span");
    let budget_dataelem1 = document.createElement("span");
    let expenses_dataelem = document.createElement("span");
    let expenses_dataelem1 = document.createElement("span");
    let balance_dataelem = document.createElement("span");
    let balance_dataelem1 = document.createElement("span");

    budget_dataelem.setAttribute("id" ,"size1");
    budget_dataelem1.setAttribute("id" ,"size");
    expenses_dataelem.setAttribute("id" ,"size4");
    expenses_dataelem1.setAttribute("id" ,"size3");
    balance_dataelem.setAttribute("id","size2");
    balance_dataelem1.setAttribute("id" ,"size5");

    let budget_datatax1 = document.createTextNode("$0");
    let expenses_datatax1 = document.createTextNode("$0");
    let balance_datatax1 = document.createTextNode("$0");

    let budget_dataRef=document.getElementById("amount");
    let expenses_dataRef=document.getElementById("expenititire-value");
    let balance_dataRef=document.getElementById("Balance-amount");
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

    budgetref.addEventListener("click",handlebudget);
}

function handlebudget(){
    let x =document.getElementById("budgetinput").value;
    console.log(x);
    document.getElementById("size").innerHTML=x;
    document.getElementById("size5").innerHTML=x;
    document.getElementById("budgetinput").value = "";
    event.preventDefault();
}

const handledata = () => {
    let x = document.getElementById("budgetinput").value;
    console.log(x);
    let y = 0, sum = 0;

    expensess.map((a) => sum += parseInt(a.cost));
    document.getElementById("size3").innerHTML=sum;

    y = x - sum;

    document.getElementById("size5").innerHTML=y;
}

const handletable = (name ,value) => {
    let tr =document.createElement("tr");
    let td =document.createElement("td");
    let td1=document.createElement("td");
    let td2=document.createElement("td");

    let tdvle =document.createTextNode(name);
    let tdvle1 =document.createTextNode(value);

    let button=document.createElement("button");
    button.classList.add("fa-solid","fa-pen-to-square","edit");
    button.style.color = "black";
    button.style.outline = "none";
    button.style.border = "none";

    let button1=document.createElement("button");
    button1.classList.add("fa-solid","fa-trash-can","delete");
    button1.style.color = "black";
    button1.style.outline = "none";
    button1.style.border = "none";
    
    let tableref =document.getElementById("tablebody");

    td.appendChild(tdvle);
    tr.appendChild(td);
    td1.appendChild(tdvle1);
    tr.appendChild(td1);
    td2.appendChild(button);
    td2.appendChild(button1);

    tr.appendChild(td2);

    tableref.appendChild(tr);
}

const handleexpeses= () => {
    let expnameref = document.getElementById("budgetinput1").value;
    let expvalueref = document.getElementById("budgetinput1-1").value;
    console.log(expvalueref,expnameref);

    expensess.push({
        name:expnameref,
        cost:expvalueref
    });

    console.log(expensess);

    document.getElementById("budgetinput1").value = '';
    document.getElementById("budgetinput1-1").value = '';

    // document.getElementById("table1").style.display = "inline-block";

    handletable(expnameref,expvalueref);
    handledata();
    event.preventDefault();
}

expensesref.addEventListener("submit",handleexpeses);
window.onload=handlebom();