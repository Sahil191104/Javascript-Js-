function incometaxolo() {
    let i = parseInt(document.getElementById("income").value);
    
    // console.log(i);
    
    if (i < 300000) {
        // console.log(i);
        document.getElementById("one").value = i;
        document.getElementById("two").value = 0;
    } else if (i > 300000 && i <= 600000) {
        n = (i * 5) / 100;
        z = i - n;
        document.getElementById("one").value = i;
        document.getElementById("two").value = 0;
        document.getElementById("four").value = n;
        document.getElementById("three").value = z;
    } else if (i > 600000 && i <= 900000) {
        q = (i-300000)-300000;
        l = (q * 10) / 100;
        x = q - l;
        document.getElementById("five").value = l;
        document.getElementById("six").value = x;
    } else if (i > 900000 && i <= 1200000) {
        e = ((i-300000)-300000)-600000;
        p = (e * 15) / 100;
        d =  e - p;
        document.getElementById("seven").value = p;
        document.getElementById("eight").value = d;
    } else if (i > 1200000 && i <= 1500000) {
        o = (((i-300000)-300000)-600000)-900000;
        g = (o * 20) / 100;
        h = o - g;
        document.getElementById("nain").value = g;
        document.getElementById("ten").value = h;
    } else if (i > 1500000) {
        c = ((((i-300000)-300000)-600000)-900000)-1200000;
        j = (c * 30) / 100;
        k = c - j;
        document.getElementById("eleven").value = j;
        document.getElementById("tvaeel").value = k;
    } 

    // document.getElementById("one").value = i;
    //     document.getElementById("two").value = 0;
    //     document.getElementById("four").value = n;
    //     document.getElementById("three").value = z;
    //     document.getElementById("five").value = l;
    //     document.getElementById("six").value = x;
}