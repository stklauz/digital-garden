import {state} from './globalState';

export var canvas = document.getElementById("app");
export var ctx = canvas.getContext("2d");

export function keyUpHandler() {
    state.canvas.keyDown = false;    
    state.canvas.keys.left = false;
    state.canvas.keys.top = false;
    state.canvas.keys.right = false;   
    state.canvas.keys.bottom = false;     
}

export var KEY = {
    onUp : function() {
        state.canvas.keyDown = false;    
        state.canvas.keys.left = false;
        state.canvas.keys.top = false;
        state.canvas.keys.right = false;   
        state.canvas.keys.bottom = false;  
    }
}


export function keyDownHandler(e) {
    state.canvas.keyDown = true;
    switch (e) {
        case 37:
            state.canvas.keys.left = true;
            break;
        case 38:
            state.canvas.keys.top = true;
            break;
        case 39:
            state.canvas.keys.right = true;
            break;
        case 40:
            state.canvas.keys.bottom = true;
            break; 
        default:
            break;
    }   
}