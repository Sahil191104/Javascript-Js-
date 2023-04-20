function incometaxolo() {
    let y = parseInt(document.getElementById("income").value);
    
    if (y > 300000) {
        console.log(y);
        document.getElementById("one").value = y;
    }
}