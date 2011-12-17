/**
 * Module dependencies.
 */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , sio = require('socket.io')
	, scrabble = require('./scrabble');

/**
 * App.
 */

var app = express.createServer();

/**
 * App configuration.
 */

app.configure(function () {
  app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }))
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname);
  app.set('view engine', 'jade');

  function compile (str, path) {
    return stylus(str)
      .set('filename', path)
      .use(nib());
  };
});

/**
 * App routes.
 */

app.get('/', function (req, res) {
  res.render('index', { layout: false});
});

/**
 * App listen.
 */

app.listen(3000, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

/**
 * Socket.IO server (single process only)
 */

var io = sio.listen(app)
	, board = {}
	, letters = scrabble.letters

io.sockets.on('connection', function (socket) {
	
	socket.emit('board update', board);
	
	socket.on('board update', function(update){
		for (var coords in update){
			var letter = update[coords];
			board[coords] = letter;
			socket.broadcast.emit('board update', update);
		}
	});
	
	socket.on('pick tile', function(){
		var letter, _ref;
		_ref = scrabble.getRandomLetterAndRemainingLetters(letters)
			, letter = _ref[0]
			, letters = _ref[1];
		socket.emit('new tile', letter);
	});

});


