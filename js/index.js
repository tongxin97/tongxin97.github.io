var main = document.getElementById("main");
var navArea = document.querySelector("#nav");
var navBar = document.querySelector(".nav-bar");
var navContent = document.querySelector("header");

function adjustNav() {
    if ($(window).width() < 950) {


        $(".nav-bar").hover(function() {
            navArea.className = "nav-transform";
            navArea.style.transform =  "translateX(15em)";
        });

        $("#nav").mouseover(function() {
            navArea.className = "nav-transform";
            navArea.style.transform =  "translateX(15em)";
        });

        $("#nav").mouseout(function() {
            navArea.style.transform =  "translateX(-15em)";
        });
    }
    else {
        navArea.className = "";
        navArea.style.transform = "translateX(0)";
        $(".nav-bar").unbind();
        $("#nav").unbind();
    }
}

$(window).ready(function() {
    adjustNav();
});

$(window).resize(function() {
    adjustNav();
});
