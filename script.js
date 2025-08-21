const iconHamburger = document.getElementById("icon-hamburger");
const navItems = document.getElementById("nav-items");

iconHamburger.addEventListener("click", () => {
    if (navItems.style.display === "flex"){
        navItems.style.display = "none";
    } else {
        navItems.style.display = "flex";
    }
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 765){
        navItems.style.display = "flex"
    }
})