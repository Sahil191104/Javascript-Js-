function productiontable() {
    let m = document.getElementById("milk").value;
    let o = document.getElementById("one").value;
    let t = document.getElementById("two").value;
    let h = document.getElementById("three").value;
    let f = document.getElementById("four").value;

    let but = o * 2;
    let cur = t * 3;
    let pau = h * 6;
    let che = f * 10;
    let total2, total3, total4;

    let total1 = m - but;
    if (total1 <= m) {
        document.getElementById("one1").value = but;
        document.getElementById("ans1").innerHTML = "Ready";
    } else {
        document.getElementById("one1").value = 0;
        document.getElementById("ans1").innerHTML = "Not Ready";
    }

    // if (total2 = total1 - cur) {
    //     if (total2 <= total1) {
    //         document.getElementById("two1").value = cur;
    //         document.getElementById("ans2").innerHTML = "Ready";
    //     }
    // } else if (-1 <= total1) {
    //     document.getElementById("two1").value = 0;
    //     document.getElementById("ans2").innerHTML = "Not Ready";
    // }

    // if (total3 = total2 - pau) {
    //     if (total3 <= total2) {
    //         document.getElementById("three").value = pau;
    //         document.getElementById("ans3").innerHTML = "Ready";
    //     }
    // } else if (-1 <= total2) {
    //     document.getElementById("three").value = 0;
    //     document.getElementById("ans3").innerHTML = "Not Ready";
    // }

    // if (total4 = total3 - che) {
    //     if (total4 <= total3) {
    //         document.getElementById("four1").value = che;
    //         document.getElementById("ans4").innerHTML = "Ready";
    //     }
    // } else if (-1 <= total3) {
    //     document.getElementById("four1").value = 0;
    //     document.getElementById("ans4").innerHTML = "Not Ready";
    // }
}