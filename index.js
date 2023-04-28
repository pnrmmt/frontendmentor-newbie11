document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".click").style.display = "flex";
    document.getElementById("buttonclose").style.display = "inline-block";
    document.getElementById("button").style.display = "none";

})

function init() {
    document.querySelector(".click").style.display = "none";
    document.getElementById("button").style.display = "inline-block";
    document.getElementById("buttonclose").style.display = "none";

}

document.getElementById("buttonclose").addEventListener("click", init);
document.getElementById("buttonCloseOne").addEventListener("click", init);