let expensesref = document.getElementById("expenses")
const handlebom = () => {
    let budget_dataelem = document.createElement("span")
    budget_dataelem.setAttribute("id" ,"size1")
    let budget_datatax = document.createTextNode("$");
    
    let budget_dataelem1 = document.createElement("span")
    budget_dataelem1.setAttribute("id" ,"size")
    let budget_datatax1 = document.createTextNode("0");
    
    budget_dataelem.appendChild(budget_datatax)
    budget_dataelem1.appendChild(budget_datatax1)
    
    let budget_dataRef=document.getElementById("budget-data")
    
    budget_dataRef.appendChild(budget_dataelem)
    budget_dataRef.appendChild(budget_dataelem1)
    
    
    
    let expenses_dataelem = document.createElement("span")
    expenses_dataelem.setAttribute("id" ,"size4")
    let expenses_datatax = document.createTextNode("$");
    
    let expenses_dataelem1 = document.createElement("span")
    expenses_dataelem1.setAttribute("id" ,"size3")
    let expenses_datatax1 = document.createTextNode("0");
    
    expenses_dataelem.appendChild(expenses_datatax)
    expenses_dataelem1.appendChild(expenses_datatax1)
    
    let expenses_dataRef=document.getElementById("expenses-data")
    
    expenses_dataRef.appendChild(expenses_dataelem)
    expenses_dataRef.appendChild(expenses_dataelem1)
    
    
    let balance_dataelem = document.createElement("span")
    balance_dataelem.setAttribute("id","size2")
    let balance_datatax = document.createTextNode("$");
    
    let balance_dataelem1 = document.createElement("span")
    balance_dataelem1.setAttribute("id" ,"size5")
    let balance_datatax1 = document.createTextNode("0");
    
    balance_dataelem.appendChild(balance_datatax)
    balance_dataelem1.appendChild(balance_datatax1)
    
    let balance_dataRef=document.getElementById("balance-data")
    
    balance_dataRef.appendChild(balance_dataelem)
    balance_dataRef.appendChild(balance_dataelem1)
    
    let budgetref = document.getElementById("btn")
    
    budgetref.addEventListener("click",handlebudget)
    
}

function handlebudget(){

    let x =document.getElementById("budget").value
    console.log(x);
    document.getElementById("size").innerHTML=x
    document.getElementById("size5").innerHTML=x
    event.preventDefault();
}
const handletable = (name ,value) => {
let tr =document.createElement("tr");

    let td =document.createElement("td");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let button=document.createElement("button");
    let button1=document.createElement("button");

    let tdvle =document.createTextNode(name);
    let tdvle1 =document.createTextNode(value)
    let btn1 =document.createTextNode("Edit");
    let btn2 =document.createTextNode("Updeta");
    
    let tableref =document.getElementById("tablebody")


    td.appendChild(tdvle);
    tr.appendChild(td);

    td1.appendChild(tdvle1);
    tr.appendChild(td1);

    button.appendChild(btn1);
    button1.appendChild(btn2);
    td2.appendChild(button);
    td2.appendChild(button1);   
    tr.appendChild(td2)

    tableref.appendChild(tr);
}
const handleexpeses= () => {
    let expnameref = document.getElementById("expname").value;
    let expvalueref = document.getElementById("expvalue").value;

    document.getElementById("expname").value = '';
    document.getElementById("expvalue").value = '';

    document.getElementById("table1").style.display="inline-block";

    console.log(expvalueref,expnameref);
    handletable(expnameref,expvalueref);
    event.preventDefault();
}


expensesref.addEventListener("submit",handleexpeses)
window.onload=handlebom();