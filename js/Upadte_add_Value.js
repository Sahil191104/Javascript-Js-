let arr = [];

const todoData = () =>{

let val = document.getElementById("todo").value;

// console.log(val);    

    document.getElementById("ans").innerHTML = val;
    document.getElementById("ans").style.display = 'block';
    // document.getElementById("i").style.display = 'block'

        arr.push(val);
        console.log(arr.toString());
        
        //  arr[val];
        

    let print = '<ul>';
    arr.map((a) =>{
        print = print + '<li>' + a + "" + '</li>'; 

    print =print + '</ul>'
    document.getElementById('ans').innerHTML = print;
    
    });

console.log(a);

}

const remove = () =>{

    document.getElementById("ans").innerHTML = '';
    document.getElementById("i").innerHTML = '';

}