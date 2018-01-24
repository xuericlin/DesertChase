var loadState = {
    preload: function() {
        // var loadingMessage = game.add.bitmapText(game.world.centerX, game.world.centerY, 'zigFont', "Loading    ...", 24);
        // loadingMessage.anchor.setTo(0.5,0.5);


        // loadingMessage.text = "Loading Sounds ...";
        

        // Used to load the background music, game over and win sounds, and UI sounds
        // game.load.audio('winSound', 'assets/sounds/win.mp3');
        // game.load.audio('loseSound', 'assets/sounds/gameover.wav');

        // loadingMessage.text = "Loading UI ...";

        // Menu Items
        game.load.image('start', "assets/menu/start.png");
        game.load.image('instruction', "assets/menu/instruction.png");
        game.load.image('credit', "assets/menu/credit.png");
        game.load.image('instructionPage','assets/menu/instructionPage.png');
        game.load.image('creditPage', "assets/menu/creditPage.png");

        // Menu Items on game screen
        game.load.image('menu', "assets/menu/menu.png");
        game.load.image('mute', "assets/sprites/mute.png");
        game.load.image('muted', "assets/sprites/mute2.png");


        //background image
        game.load.image('desertBackground', 'assets/sprites/desertBackground.png');


        // Overlays
        game.load.image('loseScreen', 'assets/sprites/gameover.png');
        game.load.image('winScreen', 'assets/sprites/youwin.png');
        game.load.image('eventBorder', 'assets/sprites/normal_border.png');

        // Audio; drop the beat; Used to load the background music, game over and win sounds, and UI sounds
	    game.load.audio('bgm', 'assets/sounds/metalBGM.mp3');
        // Note: https://phaser.io/examples/v2/audio/play-music used to change pitch/volume etc
	    game.load.audio('click', 'assets/sounds/click1.wav');
	    game.load.audio('win', 'assets/sounds/win.mp3');
	    game.load.audio('lose', 'assets/sounds/gameover.wav');
	    game.load.audio('explosionSound', 'assets/sounds/explosion.wav');
	    game.load.audio('crash', 'assets/sounds/crash.wav');

        // loadingMessage.text = "Loading Sprites ...";
        
        // The sprites
        game.load.image('truckTracks', 'assets/sprites/truck_track.png');
        game.load.image('carTracks', 'assets/sprites/car_track.png');
        game.load.image('planeTracks', 'assets/sprites/plane_track.png');
        game.load.image('car', 'assets/sprites/car.png');
        game.load.image('barrier', 'assets/sprites/barrier.png');
        game.load.image('truck', 'assets/sprites/truck.png');
        game.load.image('obstacle', 'assets/sprites/obstacle.png');
        game.load.image('desertTile', 'assets/sprites/desertTile.png');
        game.load.image('explosion', 'assets/sprites/explosion.png');
        game.load.image('black','assets/sprites/black.png');


    },
    create: function() {
        console.log("Loaded!");
        game.state.start('setup');
    }

};