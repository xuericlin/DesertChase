var menuState = {

	create: function() {
	

	click = game.add.audio('click', volume);

    nameLabelDesert = game.add.bitmapText(game.world.centerX, game.world.centerY - TILE_SIZE*5.1, 'zigFont', "Desert", 100);
    nameLabelDesert.anchor.setTo(0.5,0.5);
    nameLabelDesert.tint = 0xddaa00;   

    nameLabelChase = game.add.bitmapText(game.world.centerX, game.world.centerY - TILE_SIZE*3.9, 'zigFont', "Chase", 100);
    nameLabelChase.anchor.setTo(0.5,0.5);
    nameLabelChase.tint = 0xddaa00;  

	console.log("Menued...");

	// Start button
	gameStart = game.add.button(game.world.centerX, game.world.centerY - 1.85*TILE_SIZE, 'start', startClick, this);
	gameStart.anchor.setTo(0.5,0.5);
	gameStart.scale.setTo(0.45,0.45);

	// Instruction button
	instruction = game.add.button(game.world.centerX, 0.75*TILE_SIZE + game.world.centerY, 'instruction', instructionClick, this)
	instruction.anchor.setTo(0.5,0.5);
	instruction.scale.setTo(0.45,0.45);

	// Credit button
	credit = game.add.button(game.world.centerX, game.world.centerY + 3.5*TILE_SIZE, 'credit', creditClick, this)
	credit.anchor.setTo(0.5,0.5);
	credit.scale.setTo(0.45,0.45);

    // BGM
    backgroundMusic = game.add.audio('bgm', volume, true);


    // Win/Lose Music
	winSound = game.add.audio('win', volume, true);
	loseSound = game.add.audio('lose', volume, true);


	function startClick() {
    	click.play();
		game.state.start('main');
	}	

	function creditClick() {
		click.play();
		game.state.start('credit');
	}

	function instructionClick() {
		click.play();
		game.state.start('instruction');
	}

	}
}