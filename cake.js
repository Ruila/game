var checkbox = document.querySelector("#already");
var startbtn = document.querySelector("#startbtn");
console.log(startbtn);
checkbox.addEventListener('click', function () {
    console.log(checkbox.checked);
    if (checkbox.checked) {
        startbtn.classList.remove("hide");
    } else {
        startbtn.classList.add("hide");
    }
});