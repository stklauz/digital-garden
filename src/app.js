function startApp () {
    var canvas = document.getElementById("app");
    var ctx = canvas.getContext("2d");

    canvas.height = 200;
    canvas.width = 200;
}

window.onload = startApp;