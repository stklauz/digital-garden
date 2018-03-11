import {state, ctx} from './../globalState';

export var Player = {
    render: function() {
        ctx.beginPath();
        ctx.arc(state.player.x, state.player.y, state.player.size, 0, Math.PI*2);
        ctx.fillStyle = state.player.color;
        ctx.fill();
        ctx.closePath();
    }
}