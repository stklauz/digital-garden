import {state} from './globalState';
import {canvas, ctx, keyDownHandler, keyUpHandler} from './helpers';
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
    // clear canvas
    ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);

    // render objects
    Atlas.render();
    Player.render();
}

window.onload = startApp;