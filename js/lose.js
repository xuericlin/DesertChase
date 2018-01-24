var loseState = {

    create: function() {

        console.log("Lose!");

		// var loseText = game.add.text(game.world.centerX, game.world.centerY + TILE_SIZE *3, "Click on the Game Over to restart the game", {font: "20px Arial", fill: "#0ff0ff"});
		// loseText.anchor.setTo(0.5,0.5);

		// Start button
		gameStart = game.add.button(game.world.centerX, game.world.centerY, 'loseScreen', loseClick, this);
		gameStart.scale.setTo(0.75,0.75);
		gameStart.anchor.setTo(0.5,0.5);


		loseMusic();

		// Lose on Click function
		function loseClick() {
			LEVEL = 0;
			backgroundMusic.stop();
			game.state.start('menu');
		}	

		function loseMusic() {
			loseSound.play("",0,1,false);
		}

    }
};