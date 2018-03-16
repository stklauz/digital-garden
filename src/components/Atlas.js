import {state} from './../globalState';
import {ctx} from './../helpers';
import {atlasList} from './../atlasList';

export var Atlas = {

    handlePlayerMovement(){
        let distance = 10;

        if (state.canvas.keys.left) {
            state.atlas.xOffset += distance;
        }
        if (state.canvas.keys.top) {
            state.atlas.yOffset += distance;
        }
        if (state.canvas.keys.right) {
            state.atlas.xOffset -= distance;
        }
        if (state.canvas.keys.bottom) {
            state.atlas.yOffset -= distance;
        }
    },

    renderTile: function(row, column, color) {
        const size = state.atlas.size;
        let x = size * column + state.atlas.xOffset;
        let y = size * row + state.atlas.yOffset;
        
        ctx.beginPath();
        ctx.rect( x, y, x+size-state.atlas.xOffset, y+size-state.atlas.yOffset);
        ctx.fillStyle = color;        
        ctx.fill();
        ctx.closePath();
    },


    render: function() {
        state.canvas.keyDown && this.handlePlayerMovement();
        var currentAtlas = atlasList[state.level.num];

        for (var i = 0; i < currentAtlas.length; i++) {
            for (var tile = 0; tile < currentAtlas[i].length; tile++) {
                switch (currentAtlas[i][tile]) {
                    case 0:
                        this.renderTile(i,tile, '#BCBCBC');
                        break;
                    case 1:
                        this.renderTile(i, tile, '#FFF');
                        break;
                    default:
                        break;
                }
            }
        }
    }
}