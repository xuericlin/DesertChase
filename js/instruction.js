var instructionState = {

	create: function() {

		instructionPage = game.add.sprite(game.world.centerX , game.world.centerY  , 'instructionPage');
		instructionPage.width = gameX*scaleRatio;
		instructionPage.length = gameY*scaleRatio;
		instructionPage.anchor.setTo(0.5,0.5);

		let text = game.add.text(game.world.centerX ,game.world.centerY + 6.3*TILE_SIZE ,"Click anywhere to go back to menu!", {font: "18px Arial", fill: "#0ff0ff"});
		text.anchor.setTo(0.5,0.5);

		game.input.onDown.add(click, this);

		function click() {
			backgroundMusic.stop();
			game.state.start("menu");

		}

	}
	
}