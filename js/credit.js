var creditState = {

	create: function() {

		credit = game.add.sprite(game.world.centerX, game.world.centerY, 'creditPage');
		credit.anchor.setTo(0.5,0.5);
		credit.width = gameX*scaleRatio;
		credit.length = gameY*scaleRatio;

		let text = game.add.text(game.world.centerX ,game.world.centerY + 5*TILE_SIZE ,"Click anywhere to go back to menu!", {font: "18px Arial", fill: "#0ff0ff"});
		text.anchor.setTo(0.5,0.5);
		game.input.onDown.add(click, this);

		function click() {
			backgroundMusic.stop();
			game.state.start("menu");

		}

	}
	
}