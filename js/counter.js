const counter = () => {
     let count = 0;

    return function inner () {
        count++;
        console.log(count);
    }
}

let x = counter();
x();
x();
x();
x();

let xy = counter();
xy();
xy();
xy();