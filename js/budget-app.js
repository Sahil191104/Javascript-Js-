let RefForm = document.getElementById("budgetaddFrom")
let RefExpForm = document.getElementById("expenseForm")

let RefDivBudget = document.getElementById("budget")
let RefDivExp = document.getElementById("expense")
let RefTotalBud = document.getElementById("totalbudget")

let spanBudgetelem = document.createElement("span")
spanBudgetelem.setAttribute("id", "budgetshow")
let spanTxtElem = document.createTextNode("0")

spanBudgetelem.appendChild(spanTxtElem)

RefDivBudget.appendChild(spanBudgetelem)

let spanExpenseelem = document.createElement("span")
spanExpenseelem.setAttribute("id", "expeshow")
let spanExpenseTxtElem = document.createTextNode("0")

spanExpenseelem.appendChild(spanExpenseTxtElem)

RefDivExp.appendChild(spanExpenseelem)

let spanTotalelem = document.createElement("span")
spanTotalelem.setAttribute("id", "totalshow")
let spanTotalTxtElem = document.createTextNode("0")

spanTotalelem.appendChild(spanTotalTxtElem)

RefTotalBud.appendChild(spanTotalelem)

let budgetValue = 0;

const hendalbudgetBtn = () => {
    let val = document.getElementById("budgetdata").value

    budgetValue = val




    document.getElementById("budgetshow").innerHTML = val

    document.getElementById("budgetdata").value = ''

    expenseClau()

    event.preventDefault()
}

let arrExpenseList = []



const hendalExpenseBtn = () => {
    let expdata = document.getElementById("ExpeData").value
    let expval = parseInt(document.getElementById("ExpeValue").value)

    let rendom = Math.floor(Math.random() * 1000)

    console.log(rendom);

    tmpobject = {
        id: rendom,
        ex_name: expdata,
        ex_amount: expval
    }

    if (expdata === '') {
        document.getElementById("errorname").innerHTML = "Please Enter Name"
    } else if (expval) {
        document.getElementById("listExp").style.display = "inline-block"


        let RefExpList = document.getElementById("expenseList")

        let RefTd = document.createElement("tr")
        RefTd.setAttribute("id", "row" + rendom);

        RefExpList.appendChild(RefTd)

        let Reftr1elem = document.createElement("td")
        let Reftr1txt = document.createTextNode(expdata)

        Reftr1elem.appendChild(Reftr1txt)
        RefTd.appendChild(Reftr1elem)

        let Reftr2elem = document.createElement("td")
        let Reftr2txt = document.createTextNode(expval)

        Reftr2elem.appendChild(Reftr2txt)
        RefTd.appendChild(Reftr2elem)

        let trBtnelem = document.createElement("tr")

        let remBtnelem = document.createElement("button")
        remBtnelem.setAttribute("onclick", "handledelete("+rendom+")")
        let remtxtelem = document.createTextNode("Delete")

        remBtnelem.appendChild(remtxtelem)

        let Editelem = document.createElement("button")

        let Edittxtelem = document.createTextNode("Edit")

        Editelem.appendChild(Edittxtelem)

        trBtnelem.appendChild(remBtnelem);
        trBtnelem.appendChild(Editelem)

        RefTd.appendChild(trBtnelem)

        arrExpenseList.push(tmpobject)

        

        expenseClau()

        document.getElementById("errorname").innerHTML = ""
        document.getElementById("errorcost").innerHTML = ""

        document.getElementById("ExpeData").value = ''
        document.getElementById("ExpeValue").value = ''
    } else {
        document.getElementById("errorcost").innerHTML = "Please Enter Amount"
    }

    event.preventDefault()
}

const expenseClau = () => {
    let ans = 0;

    arrExpenseList.map((v) => {
        ans = ans + v.ex_amount
    })

    let finalAns = 0

    finalAns = budgetValue - ans;
    console.log(budgetValue);

    document.getElementById("expeshow").innerHTML = ans;
    document.getElementById("totalshow").innerHTML = finalAns;

}

const handledelete = (rendomnumber) => {
    let RefRen = document.getElementById("row" + rendomnumber);
    console.log(RefRen);
    RefRen.remove();

    // let fData = arrExpenseList.filter((a,i) => a.id === rendomnumber);

    arrExpenseList.map((a,i) => {
        if (a.id === rendomnumber) {
            arrExpenseList.splice(i,1)
        }
    })

    console.log(fData);
    console.log(RefRen);

    expenseClau();
}


RefForm.addEventListener("submit", hendalbudgetBtn)
RefExpForm.addEventListener("submit", hendalExpenseBtn)