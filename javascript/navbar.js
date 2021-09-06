function navbar(){
    document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
    if (navbar_icon.className == "fas fa-bars") {
        navbar_icon.className = "fas fa-times";
    } else if (navbar_icon.className == "fas fa-times") {
        navbar_icon.className = "fas fa-bars";
    }
}

let navbar_icon = document.querySelector(".fas");