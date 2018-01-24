var winState = {

    create: function() {

        console.log("Win!");

		// var winText = game.add.text(game.world.centerX, game.world.centerY + TILE_SIZE*3,"Now survive as far as you can!", {font: "20px Arial", fill: "#0ff0ff"});
		// winText.anchor.setTo(0.5,0.5);

	    nameLabel = game.add.bitmapText(game.world.centerX, game.world.centerY + TILE_SIZE*3.5, 'zigFont', "Now survive as far as you can!", 20);
	    nameLabel.anchor.setTo(0.5,0.5);

		// Start button
		gameStart = game.add.button(game.world.centerX , game.world.centerY, 'winScreen', winClick, this);
		gameStart.scale.setTo(0.75,0.75);
		gameStart.anchor.setTo(0.5,0.5);

		winMusic();

		// Win on Click function
		function winClick() {
			backgroundMusic.stop();
			gameReset();
			game.state.start('main');
		}	

	    function winMusic() {
	    	winSound.play("",0,1,false);
		}

    }
};