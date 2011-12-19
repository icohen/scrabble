/**
 * Module dependencies.
 */

var express = require('express')
  , utils = require('express/node_modules/connect/lib/utils')
  , stylus = require('stylus')
  , nib = require('nib')
  , sio = require('socket.io')
  , scrabble = require('./scrabble');

/**
 * App.
 */

var app = express.createServer()
   , MemoryStore = express.session.MemoryStore
   , sessionStore = new MemoryStore();
/**
 * App configuration.
 */

app.configure(function (){
    app.use(express.cookieParser());
    app.use(express.session({store: sessionStore
        , secret: 'i_<3_heather'}))
    app.use(stylus.middleware({ src: __dirname + '/public', compile: compile}));
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname);
    app.set('view engine', 'jade');
    app.store = sessionStore;

    function compile (str, path){
        return stylus(str)
          .set('filename', path)
          .use(nib());
    };
});

/**
 * App routes.
 */

app.get('/', function (req, res){
    if (req.session.tiles == undefined){
        req.session.tiles = '';
    }
    res.render('index', { layout: false,
                          tiles: req.session.tiles });
});

/**
 * App listen.
 */

app.listen(3000, function (){
    var addr = app.address();
    console.log('   app listening on http://' 
                + addr.address + ':' 
                + addr.port);
});

/**
 * Socket.IO server (single process only)
 */

var io = sio.listen(app)
    , board = {}
    , remainingTiles = scrabble.tiles;

io.set('authorization', function(data, fn){
    var cookies = utils.parseCookie(data.headers.cookie)
      , sid = cookies['connect.sid'];
    app.store.load(sid, function(err, sess){
        if (err) return fn(err);
        data.session = sess;
        fn(null, true);
    });
});

io.sockets.on('connection', function (socket) {
    // board 
    socket.emit('board updates', board);
    socket.on('board updates', function updateBoard(update){
        for (var coords in update){
            var tile = update[coords];
            board[coords] = tile;
            socket.broadcast.emit('board updates', update);
        }
    });
    // rack
    socket.on('draw tiles', function drawTiles(playerTiles){
        var newPlayerTiles, newRemainingTiles;
        var _ref = scrabble.getNewAndRemainingTiles(playerTiles, 
                                                    remainingTiles);
        newPlayerTiles = _ref[0];
        newRemainingTiles = _ref[1];
        saveTiles(playerTiles + newPlayerTiles);
        remainingTiles = newRemainingTiles;
        socket.emit('new tiles', newPlayerTiles);
    })
    socket.on('tile order change', saveTiles);
    
    // helpers
    function saveTiles(tiles){
        var session = socket.handshake.session;
        session.tiles = tiles;
        session.save();
    }
});

