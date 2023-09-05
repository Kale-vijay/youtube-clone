var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".side-bar");
var cointainer = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    cointainer.classList.toggle("large-container");
}