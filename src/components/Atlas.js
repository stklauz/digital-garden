import {state} from './../globalState';
import {ctx} from './../helpers';
import {atlasList} from './../atlasList';

export var Atlas = {

    handlePlayerMovement(){
        if (state.canvas.keys.left) {
            state.atlas.xOffset++;
        } else if (state.canvas.keys.top) {
            state.atlas.yOffset--;
        } else if (state.canvas.keys.right) {
            state.atlas.xOffset--;
        } else if (state.canvas.keys.bottom) {
            state.atlas.yOffset++;
        }
    },

    renderRoad: function(row, column) {
        const size = state.atlas.size;
        let x = size * column + state.atlas.xOffset;
        let y = size * row + state.atlas.xOffset;
        
        ctx.beginPath();
        ctx.rect( x, y, x+size, y+size);
        ctx.fillStyle = "white";        
        ctx.fill();
        ctx.closePath();
    },

    renderWeeds: function(row, column) {
        const size = state.atlas.size;
        let x = size * column + state.atlas.xOffset;
        let y = size * row + state.atlas.xOffset;

        ctx.beginPath();
        ctx.rect( x, y, x+size, y+size);        
        ctx.fillStyle = "#bcbcbc";
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
                        this.renderRoad(i,tile);
                        break;
                    case 1:
                        this.renderWeeds(i, tile);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}