// Function declaration
function grreting() {
    console.log("Good Morning");
}

// Function call
grreting();

function calculateAge(dobage) {
    let year;

    year = 2023 - dobage;

    return year;
}

let x = calculateAge(1992);
console.log(x);

let y = calculateAge(1998);
console.log(y);



// Arrow Function:-
const age = (dobyear) => {
    let Age;

    Age = 2023 - dobyear;

    return Age;
}

let q = age(1982);
console.log(q);

const crosting = () => {
    
}

const costing = (dest) => {
    if (dest === 'goa') {
        return 35000;
    } else if (dest === 'bali') {
        return 50000;
    } else if (dest === 'manali') {
        return 40000;
    }
}

const package = (dest1, dest2) => {
    let c1 = costing (dest1);
    let c2 = costing (dest2);

    let msg = dest1 + "cost you" + c1 + " and " + dest2 + "cost you" + c2;

    return msg;
}