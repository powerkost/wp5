function st() {
    var k = document.getElementById("kol").value;
    var e = document.getElementById("ed").value;
    var r = document.getElementById("result");
    r.innerHTML = k * e;
    if (k * e === 0) {
        alert("ноль получается)");
    }
}
window.document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("button");
    b.addEventListener("click", st);
});
