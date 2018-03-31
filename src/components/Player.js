import {state} from './../globalState';
import {ctx} from './../helpers';

export var Player = {
    render: function() {
        let size = state.player.size;

        ctx.beginPath();
        ctx.rect( state.player.x, state.player.y, size, size);
        ctx.fillStyle = state.player.color;
        ctx.fill();
        ctx.closePath();
    }
}