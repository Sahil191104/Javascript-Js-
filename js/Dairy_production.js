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
    let total1,total2, total3, total4;

    if (but <= m) {
        total1 = m - but;
        document.getElementById("one1").value = but;
        document.getElementById("ans1").innerHTML = "Ready";
    } else {
        document.getElementById("one1").value = 0;
        document.getElementById("ans1").innerHTML = "Not Ready";
    }

    if (cur <= m) {
        total2 = m - cur;
        document.getElementById("two1").value = cur;
        document.getElementById("ans2").innerHTML = "Ready";
    } else {
        document.getElementById("two1").value = 0;
        document.getElementById("ans2").innerHTML = "Not Ready";
    }

    if (pau <= m) {
        total3 = m - pau;
        document.getElementById("three1").value = pau;
            document.getElementById("ans3").innerHTML = "Ready";
    } else {
        document.getElementById("three1").value = 0;
        document.getElementById("ans3").innerHTML = "Not Ready";
    }

    if (che <= m) {
        total4 = m - che;
        document.getElementById("four1").value = che;
            document.getElementById("ans4").innerHTML = "Ready";
    } else {
        document.getElementById("four1").value = 0;
        document.getElementById("ans4").innerHTML = "Not Ready";
    }
}