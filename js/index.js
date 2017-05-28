var main = document.getElementById("main");
var navArea = document.querySelector("#nav");
var navBar = document.querySelector(".nav-bar");
var navContent = document.querySelector("header");
var status = "none";
var opacity = "1";
var bg = "none";

function adjustNav() {
    if ($(window).width() < 950) {

        navContent.style.display = status;

        $(".nav-bar").click(function() {
            status = (status == "block")? "none" : "block";
            navContent.style.display = status;

            bg = (bg == "none")? "#e6e6e6" : "none";

            // opacity = (opacity == "1")? "0.9" : "1";
            // main.style.opacity = opacity;
            // navContent.style.opacity = "1";

            navArea.style.background = bg;
        });

        $(".nav-bar").hover(function() {
            navContent.style.display = "block";
            // main.style.opacity = "0.9";
            navArea.style.background = "#e6e6e6";
        });

        $("#nav").mouseover(function() {
            navContent.style.display = "block";
            // main.style.opacity = "0.9";
            navArea.style.background = "#e6e6e6";
        });

        $("#nav").mouseout(function() {
            navContent.style.display = "none";
            // main.style.opacity = "1";
            navArea.style.background = "none";
        });
    }
    else {
        // main.style.opacity = "1";
        navContent.style.display = "block";
        navArea.style.background = "none";

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
