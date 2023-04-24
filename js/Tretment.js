let x = document.getElementById("treatment");

function tretmenttable() {
    let trementv = x.value;
    let y = document.getElementById("mainsentense");
    let o = document.getElementById("one");
    let s = document.getElementById("one1");
    let q = document.getElementById("one2");

    document.getElementById("container").style.display = "inline-block";
    // document.getElementById("container1").style.display = "inline-block";
    document.getElementById("maintable").style.display = "inline-block";
    document.getElementById("datetable").style.display = "inline-block";
    document.getElementById("book").style.display = "inline-block";
    if (trementv === 'select') {
        document.getElementById("container").style.display = "none";
        document.getElementById("container1").style.display = "none";
        document.getElementById("maintable").style.display = "none";
        document.getElementById("datetable").style.display = "none";
        document.getElementById("book").style.display = "none";
    } else if (trementv === 't') {
        o.innerHTML = "Teeth Cleanings";
        s.innerHTML = 1;
        q.innerHTML = 500;
    } else if (trementv === 'f') {
        o.innerHTML = "Filings";
        s.innerHTML = 2;
        q.innerHTML = 1500;
    } else if (trementv === 'r') {
        o.innerHTML = "Root Canal Treatment";
        s.innerHTML = 4;
        q.innerHTML = 2500;
    } else if (trementv === 'c') {
        o.innerHTML = "RCT + Cover";
        s.innerHTML = 6;
        q.innerHTML = 12000;
    } else if (trementv === 'b') {
        o.innerHTML = "Braces/Invisalign";
        s.innerHTML = 12;
        q.innerHTML = 35000;
    }
}

function myDateFormat() {
    var dateControl = document.getElementById("datetable");
    // console.log(dateControl.value);
    const [year, month, day] = dateControl.value.split('-');
    const result = [day, month, year].join('-');
    document.getElementById("two1").innerHTML = result;
}

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