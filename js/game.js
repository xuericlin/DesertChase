var gameX = 900;
var gameY = 1300;
var canvas_x = window.innerWidth;
var canvas_y = window.innerHeight;
var scaleRatio = Math.min(canvas_x/gameX, canvas_y/gameY);

var desertBackground;

var game = new Phaser.Game(gameX*scaleRatio, gameY*scaleRatio, Phaser.CANVAS);




// Game Constants
var BOARD_HEIGHT = 7;
var BOARD_WIDTH  = 9;
var START_X = Math.floor(BOARD_WIDTH/2);
var START_Y = Math.floor(BOARD_HEIGHT/2);
var MOVES = 1; 
var SPAWN_CHANCE = 0.75; // Chance that something is spawned
var OBSTACLE_SPAWN = 0.25; // Chance that a obstacle is spawned instead of a car
var EVENTS_SHOWN = 5;

// Level
var LEVEL = 0;
var levelText;

// UI Constants
var TILE_SIZE = 100*scaleRatio;    
var MARGIN = 0*scaleRatio;

// Menu variables
var credits;
var instruction;
var gameStart;

// Sounds
var backgroundMusic;
var volume = 1;
var click;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('main', mainState);
game.state.add('setup',setupState);
game.state.add('menu', menuState);
game.state.add('credit', creditState);
game.state.add('instruction',instructionState);
game.state.add('win',winState);
game.state.add('lose',loseState);

game.state.start('boot');

//credits is for the images and stuff
//credit is for the credit.js file