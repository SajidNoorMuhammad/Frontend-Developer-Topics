function advancejavascript() {
    let para = document.getElementById("para");
    let para0 = document.getElementById("para0");
    para.style.display = "none"
    para0.style.display = "none";

    let para1 = document.getElementById("para1");
    para1.style.display = "block";

}

function showmethods() {
    let arraymethod = document.getElementById("arraymethod")
    arraymethod.style.display = "block";

    let btn = document.getElementById("array");
    btn.style.display = "none";

    let hidearray = document.getElementById("hidearray");
    hidearray.style.display = "block";
}

function hidemethods() {
    let hidearray = document.getElementById("hidearray");
    hidearray.style.display = "none";
    let arraymethod = document.getElementById("arraymethod")
    arraymethod.style.display = "none";
    let btn = document.getElementById("array");
    btn.style.display = "block";
}

