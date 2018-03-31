import {state} from './../globalState';
import {ctx} from './../helpers';
import {atlasList} from './../atlasList';

export var Atlas = {

    handleColision(direction, offset) {
        // lengths to find the row the player's currently at.
        let offsetYLength = Math.floor(state.atlas.yOffset / state.atlas.size);
        let playerYLength = Math.floor(state.player.y / state.atlas.size);
        let offsetXLength = Math.floor(state.atlas.xOffset / state.atlas.size);
        let playerXLength = Math.floor(state.player.x / state.atlas.size);
        let tileY = playerYLength - offsetYLength;
        let tileX = playerXLength - offsetXLength;

        switch (direction){
            case "left":
                offsetXLength = Math.floor(offset / state.atlas.size);
                tileX = playerXLength - offsetXLength;
                break;
            case "top":
                offsetYLength = Math.floor(offset / state.atlas.size);
                tileY = playerYLength - offsetYLength;
                break;
            case "right":
                offsetXLength = Math.floor((offset + state.player.size) / state.atlas.size);
                playerXLength = Math.floor((state.player.x + state.player.size) / state.atlas.size);
                tileX = playerXLength - offsetXLength;
                break;
            case "bottom":
                offsetYLength = Math.floor((offset + state.player.size) / state.atlas.size);
                playerYLength = Math.floor((state.player.y + state.player.size) / state.atlas.size);                
                tileY = playerYLength - offsetYLength;
                break;
            default:
                break;
        }

        return atlasList[state.level.num][tileY][tileX] == 0;
        
    },

    handlePlayerMovement(){        
        let distance = state.player.walkingVelocity;

        if (state.canvas.keys.left && this.handleColision( "left" , state.atlas.xOffset + distance*2)) {
            state.atlas.xOffset += distance;
        }
        if (state.canvas.keys.top && this.handleColision( "top" , state.atlas.yOffset + distance*2)) {
            state.atlas.yOffset += distance;
        }
        if (state.canvas.keys.right && this.handleColision( "right" , state.atlas.xOffset + distance)) {
            state.atlas.xOffset -= distance;
        }
        if (state.canvas.keys.bottom && this.handleColision( "bottom" , state.atlas.yOffset + distance)) {
            state.atlas.yOffset -= distance;
        }
    },

    renderTile: function(row, column, color) {
        const size = state.atlas.size;
        let x = size * column + state.atlas.xOffset;
        let y = size * row + state.atlas.yOffset;
        
        ctx.beginPath();
        ctx.rect( x, y, size, size);
        ctx.fillStyle = color;
        state.debug && (ctx.strokeStyle = "#727272");  
        state.debug && (ctx.stroke());
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