import {state, ctx, canvas} from './globalState';
import {Player} from './components/Player';
import {Atlas} from './components/Atlas';

function startApp () {
    canvas.width = state.canvas.width;    
    canvas.height = state.canvas.height;
    canvas.style.border = "1px solid #BCBCBC";
    canvas.style.margin = "20px auto";
    canvas.style.display = "block";
    
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    setInterval(updateGame(), 1000/2);


} 

function updateGame() {
    ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
    Atlas.render();
    Player.render();
}

function keyDownHandler(e) {
    swich (e.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

window.onload = startApp;