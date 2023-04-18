let  city = "surat";

const ciyprint = () => {
    console.log(city);
}

ciyprint();

city = "vapi";

ciyprint();

city = "baroda";

ciyprint();

let name = "Sahil";

const info = (salary) => { // outer function // 2
     let age = 25; // function's variable

    // inner function
    return function printfinto() { // 3
        console.log(name);
        console.log(age);
        console.log(salary);
    }
}

// outer function clall
let res = info(50000);
res();
