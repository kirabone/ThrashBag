const screens = document.querySelectorAll(".screen");

function go(id) {
screens.forEach(s => s.classList.remove("active"));
document.getElementById("s" + id).classList.add("active");
}

function notGirl() {
alert("sorry, i am not gay");
window.close();
}

function chocoNo() {
document.getElementById("noChoco").style.display = "none";
document.getElementById("chocoImg").src = "lie.jpg";
document.getElementById("chocoTitle").innerText =
"common everyone loves them";
}
function notGirl() {
go(99);
}
const noBtn = document.getElementById("escapeNo");

noBtn.addEventListener("mouseover", () => {
noBtn.style.position = "absolute";
noBtn.style.top = Math.random() * window.innerHeight + "px";
noBtn.style.left = Math.random() * window.innerWidth + "px";
});