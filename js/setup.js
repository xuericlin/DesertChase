var setupState = {
    create: function() {
        console.log("Setup Beginning");

        game.state.start('menu');
    }
};

function makeBackground() {
    // // Sets up the background
    // desertBackground = game.add.image(game.world.centerX, game.world.centerY, 'desertBackground');
    // desertBackground.anchor.setTo(0.5, 0.5);
    // desertBackground.scale.setTo(gameX*scaleRatio/desertBackground.width,gameY*scaleRatio/desertBackground.height);
    desertBackground = game.add.tileSprite(0, 0, gameX*scaleRatio, gameY*scaleRatio, 'desertBackground');
    desertBackground.tileScale.x = (game.world.centerX+1.25*TILE_SIZE)/gameX;
}