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

    document.getElementById("dentaltable").style.display = "block";
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

    let newda = new Date(refbutton);

    h = cos_c / sea_c;

    let print = '';

    print += '<table border="1"><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr><tr>'

    for (i = 1; i <= sea_c; i++) {
        if (i === 1) {
            print += '<tr>';
            print += '<td>' + i + '</td>';
            print += '<td>' + newda.toLocaleDateString() + '</td>';
            print += '<td>' + h + '</td>';
            print += '</tr>';
            console.log(i, h, newda.toLocaleDateString());
        } else {
            newda.setDate(newda.getDate() + 7);
            print += '<tr>';
            print += '<td>' + i + '</td>';
            print += '<td>' + newda.toLocaleDateString() + '</td>';
            print += '<td>' + h + '</td>';
            print += '</tr>';
            console.log(i, h, newda.toLocaleDateString());
        };
    };

    print += '</table>';
    console.log(print);

    document.getElementById("pr-plan").innerHTML = print;
    document.getElementById("pr-plan").style.display = "inline-block";

};