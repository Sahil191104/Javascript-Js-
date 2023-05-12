let frambudget = document.getElementById("budget-form");
let framexpenses = document.getElementById("expenses-form");

const handlebudget = () => {
    let budgetval = parseInt(document.getElementById("budget").value);

    let budgteref = document.getElementById("budget-div");

    let pnew = document.createElement("p");
    pnew.setAttribute("id","budget-val");

    let pnewtex = document.createTextNode(budgetval);
    pnew.appendChild(pnewtex);
    budgteref.appendChild(pnew);

    event.preventDefault();
}



frambudget.addEventListener("submit", handlebudget);
framexpenses.addEventListener("submit", handleexpenses);