let a = {
    name2: "sahil",
    language: "JavaScript"
}

console.log(a);

let p = {
    run: () => {
        alert("run");
    }
}

p.__proto__ = {
    name: "Jackie"
}

a.__proto__ = p
a.run();
console.log(a.name);