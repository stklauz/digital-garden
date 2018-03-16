import {state} from './globalState';

export var canvas = document.getElementById("app");
export var ctx = canvas.getContext("2d");

var keyList = {
    37: {
        pressed: false,
        name: "left"
    },
    38: {
        pressed: false,
        name: "top"
    },
    39: {
        pressed: false,
        name: "right"
    },
    40: {
        pressed: false,
        name: "bottom"
    }
};

export function keyHandler(e) {
    if (!keyList[e.keyCode]) {return;};

    keyList[e.keyCode].pressed = e.type == 'keydown';

    var name = keyList[e.keyCode].name;
    if (e.type == "keydown") {
        state.canvas.keys[name] = true;
        state.canvas.keyDown = true;
    } else {
        state.canvas.keys[name] = false;

        let list = Object.keys(keyList);
        for (let i of list) {
            if (keyList[i].pressed) {
                state.canvas.keyDown = true;
                break;
            }
        }
    }
}
