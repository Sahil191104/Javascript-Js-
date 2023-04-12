function Sub(){
var n, k, r, e, v, sum, avg;

n = (document.getElementById('aname').value);
k = parseInt(document.getElementById('am').value);
r = parseInt(document.getElementById('aj').value);
e = parseInt(document.getElementById('ad').value);
v = parseInt(document.getElementById('an').value);

sum=k+r+e+v;
avg=sum/4;

var newTable = document.getElementById('TableScore');
var row = newTable.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(0);
var cell3 = row.insertCell(0);
var cell4 = row.insertCell(0);

cell4.innerHTML = n;
cell3.innerHTML = sum;
cell2.innerHTML = avg;
            
if (avg < 40) {
    cell1.innerHTML="Fail";
} else {
    cell1.innerHTML="Pass";
}

}