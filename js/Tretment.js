let x = document.getElementById("treatment");

let t_c = 1, t_s = 500,
    f_c = 2, f_s = 1500,
    r_c = 4, r_s = 2500,
    c_c = 6, c_s = 12000,
    b_c = 12, b_s = 35000,
    final_c, sea_c, cos_c;

const callintre = (t, c, s) => {
    document.getElementById("one").innerHTML = t;
    document.getElementById("one1").innerHTML = c;
    document.getElementById("one2").innerHTML = s;
    
    final_c = t;
    sea_c = c;
    cos_c = s;
}

function tretmenttable() {
    let trementv = x.value;
    let y = document.getElementById("mainsentense");

    document.getElementById("container").style.display = "inline-block";
    // document.getElementById("container1").style.display = "inline-block";
    document.getElementById("maintable").style.display = "inline-block";
    document.getElementById("datetable").style.display = "inline-block";
    document.getElementById("book").style.display = "inline-block";
    if (trementv === 'select') {
        document.getElementById("container").style.display = "none";
        document.getElementById("container1").style.display = "none";
        document.getElementById("book").style.display = "none";
    } else if (trementv === 't') {
        callintre("Teeth Cleanings", t_c, t_s);
    } else if (trementv === 'f') {
        callintre("Filings", f_c, f_s);
    } else if (trementv === 'r') {
        callintre("Root Canal Treatment", r_c, r_s);
    } else if (trementv === 'c') {
        callintre("RCT + Cover", c_c, c_s);
    } else if (trementv === 'b') {
        callintre("Braces/Invisalign", b_c, b_s);
    }
}

const aptappoit = () => {
    let refbutton = document.getElementById("datetable").value
    console.log(refbutton, final_c, sea_c, cos_c);

    let newda = new Date(refbutton);
    document.getElementById("two1").innerHTML = newda;
    
    for ( i=0; i<sea_c-1; i++) {
        newda.setDate(newda.getDate() + 7);
        document.getElementById("two1").innerHTML = newda;
        // var newTable = document.getElementById("maintable1");
        // var row = newTable.insertRow(-1);
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(0);
        // var cell3 = row.insertCell(0);
        
        // cell1.innerHTML = 1;
        // cell2.innerHTML = newda;
        // cell3.innerHTML = 750;
        // cell3.innerHTML = 
    }
}

document.addEventListener("click", aptappoit);

function tretmentbutton() {
    // for (i=1; i<=s; i++) {
    //     d = q / s;
    //     document.getElementById("two").innerHTML= d;
    // }
    document.getElementById("container1").style.display = "inline-block";
    document.getElementById("container").style.display = "none";
    document.getElementById("maintable").style.display = "none";
    document.getElementById("datetable").style.display = "none";
    document.getElementById("book").style.display = "none";
    document.getElementById("maintable1").style.display = "inline-block";
}