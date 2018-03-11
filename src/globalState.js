var canvasConfig = {
    width: 800,
    height: 600
};

export var canvas = document.getElementById("app");
export var ctx = canvas.getContext("2d");


export var state = {
    canvas: {
        width: canvasConfig.width,
        height: canvasConfig.height,
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
        x: canvasConfig.width / 2,
        y: canvasConfig.height / 2,
        size: 16,
        color: '#2D9CDB'     
    },
    atlas: {
        size: canvasConfig.width / 10,
        xOffset: 0,
        yOffset: 0
    }
};
