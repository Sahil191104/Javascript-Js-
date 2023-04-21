let x = document.getElementById("treatment");

function tretmenttable() {
    let trementv = x.value;
    let y = document.getElementById("mainsentense");
    let o = document.getElementById("one");
    let s = document.getElementById("one1");
    let q = document.getElementById("one2");

    document.getElementById("maintable").style.display = "inline-block";

    if (trementv === 'select') {
        document.getElementById("maintable").style.display = "none";
    } else if (trementv === 't') {
        o.innerHTML = "Teeth Cleanings";
        s.innerHTML = 1;
        q.innerHTML = 500;
    } else if (trementv === 'f') {
        o.innerHTML = "Filings";
        s.innerHTML = 1;
        q.innerHTML = 500;
    } else if (trementv === 'r') {
        o.innerHTML = "Root Canal Treatment";
        s.innerHTML = 1;
        q.innerHTML = 500;
    } else if (trementv === 'c') {
        o.innerHTML = "RCT + Cover";
        s.innerHTML = 1;
        q.innerHTML = 500;
    } else if (trementv === 'b') {
        o.innerHTML = "Braces/Invisalign";
        s.innerHTML = 1;
        q.innerHTML = 500;
    }
}