var canvasConfig = {
    width: 640,
    height: 640
};

export var state = {
    canvas: {
        width: canvasConfig.width,
        height: canvasConfig.height,
        keyDown: false,
        keys: {
            left: false,
            top: false,
            right: false,
            bottom: false
        }
    },
    level: {
        num: 0
    },
    player: {
        x: (canvasConfig.width) / 2 - 48/2,
        y: (canvasConfig.height) / 2 - 48/2,
        walkingVelocity: 8,
        currentXTile: false,
        size: 48,
        color: '#2D9CDB'     
    },
    atlas: {
        size: 64,
        xOffset: -64,
        yOffset: -384
    },
    debug: true
};
