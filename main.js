let darkMode = document.getElementById("dark-mode");
let icon = document.getElementById("dark-mode-icon");
let text = document.getElementsByClassName("text");
let projects = document.getElementsByClassName("box-shadow");



if (darkMode) {
    darkMode.onclick = function() {
    if (icon.classList == "light-mode") {
        icon.classList.remove("light-mode");
        icon.classList.add("dark-mode");
        document.body.style.backgroundColor = "#121212";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#fff";
        }
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.remove("box-shadow-on");
        }
    }
    else {
        icon.classList.remove("dark-mode");
        icon.classList.add("light-mode");
        document.body.style.backgroundColor = "#fff";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#404040";
        }
        for (let i = 0; i < projects.length; i++) {
            projects[i].classList.add("box-shadow-on");
        }
    }
    }
}


