
let btenmouse1 = document.getElementById("onbtn1");
btenmouse1.addEventListener("mouseover", btnmouseover);
btenmouse1.addEventListener("mouseout", btnmouseout);

let btenmouse2 = document.getElementById("onbtn2");
btenmouse2.addEventListener("mousedown", btnmousedown);
btenmouse2.addEventListener("mouseup", btnmouseup);

let btenmouse3 = document.getElementById("onbtn3");
btenmouse3.addEventListener("mousemove", btnmousemove);

let btenmouse4 = document.getElementById("fname");
btenmouse4.addEventListener("keydown", btnkeydown);

let btenmouse5 = document.getElementById("flast");
btenmouse5.addEventListener("keyup", btnkeyup);

let btenmouse6 = document.getElementById("email");
btenmouse6.addEventListener("focus", onfocusm);

function btnclick() {
    console.log("onclick event");
}
function btnmouseover() {
    console.log("onclick Mouse Over");
}
function btnmouseout() {
    console.log("onclick Mouse Out");
}
function btnmousedown() {
    console.log("onclick Mouse Down");
}
function btnmouseup() {
    console.log("onclick Mouse Up");
}
function btnmousemove() {
    console.log("onclick Move");
}
function btnkeydown() {
    console.log(btenmouse4.value);
}
function btnkeyup() {
    console.log(btenmouse5.value);
}
function onfocusm() {
    
}

window.onload = function() {
    console.log("Page in load");
}
window.onunload = function() {
    console.log("Page in Unload");
}
window.onresize = function() {
    console.log("Page in Resize");
}