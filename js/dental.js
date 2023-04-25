let t_c = 1, t_s = 500,
    f_c = 2, f_s = 1500,
    r_c = 4, r_s = 2500,
    c_c = 6, c_s = 12000,
    b_c = 12, b_s = 35000,
    final_c, sea_c, cos_c;

const callintre = (t, c, s) => {
    document.getElementById("tre").innerHTML = t;
    document.getElementById("sea").innerHTML = c;
    document.getElementById("cos").innerHTML = s;

    final_c = t;
    sea_c = c;
    cos_c = s;
}

const handleselect = () => {
    let val = document.getElementById("tretment").value;

    dentaltable.style.display = "block";
    if (val === "select") {
        document.getElementById("dentaltable").style.display = "none";
    } else if (val === "t") {
        callintre("Teeth Cleanings", t_c, t_s);
    } else if (val === "f") {
        callintre("Filings", f_c, f_s);
    } else if (val === "r") {
        callintre("Root Canal Treatment", r_c, r_s);
    } else if (val === "c") {
        callintre("RCT + Cover", c_c, c_s);
    } else if (val === "b") {
        callintre("Braces/Invisalign", b_c, b_s);
    }
}

const aptappoit = () => {
    let refbutton = document.getElementById("aptdate").value
    console.log(refbutton, final_c, sea_c, cos_c);

    let newda = new Date(refbutton);
    console.log(newda);
    
    for ( i=0; i<sea_c-1; i++) {
        newda.setDate(newda.getDate() + 7);
        console.log(newda);
    }
}

document.addEventListener("click", aptappoit);