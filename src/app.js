import {state} from './globalState';
import {canvas, ctx, keyHandler} from './helpers';
import {Player} from './components/Player';
import {Atlas} from './components/Atlas';

function startApp () {
    canvas.width = state.canvas.width;    
    canvas.height = state.canvas.height;
    canvas.style.border = "1px solid #BCBCBC";
    canvas.style.margin = "20px auto";
    canvas.style.display = "block";
    
    document.addEventListener("keydown", keyHandler, false);
    document.addEventListener("keyup", keyHandler, false);

    renderGame();
}

function renderGame(){
    setTimeout(updateGame, 1000/21);
}

function updateGame() {
    // clear canvas
    ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);

    // render objects
    Atlas.render();
    Player.render();
    renderGame();
}


window.onload = startApp;