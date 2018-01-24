var bootState = {
    preload: function() {
        game.load.bitmapFont('zigFont', 'assets/zig/font/font.png','assets/zig/font/font.fnt');
    },
    create: function() {
        game.scale.pageAlignHorizontally = true; 
        game.scale.pageAlignVertically = true; 
        game.scale.refresh();
        console.log("Booted!");
        game.state.start('load');
    }
};