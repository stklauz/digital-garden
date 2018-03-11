function startApp () {
    var canvas = document.getElementById("app");
    var ctx = canvas.getContext("2d");

    canvas.height = 800;
    canvas.width = 800;
    canvas.style.border = "1px solid #BCBCBC";

    
}

window.onload = startApp;