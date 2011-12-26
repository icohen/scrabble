// socket.io specific code
var socket = io.connect();
socket.on('board updates', function(update){
    updateBoard(update);
});
socket.on('new tiles', function(tiles){
    addTilesToRack(tiles);
});

// dom ready
$(function(){
    // behavior
    $('.rack')
        .sortable({
            connectWith: '.space',
            revert: true,
            stop: function (e, ui){
                console.log('stop');
                socket.emit('rack tile change', getTilesFromRack());
              },
         }).disableSelection();
    $('.space')
        .sortable({
              connectWith: '.rack, .space',
              revert: true,
              receive: function(e, ui){
                  if ($(this).find('.tile').size() > 1)
                      ui.sender.sortable('cancel');
              }
        }).disableSelection();

    // events
    $('#draw').click(function drawTilesHandler(){
        socket.emit('draw tiles', getTilesFromRack());
    });
    $('#play').click(function playHandler(){
        var updates = {};
        $('#board .not-played')
            .each(function(){
                var v = $(this).text();
                var played = $(this)
                                .parent()
                                    .play(v);
                updates[played.data('coords')] = v;
            });
            socket.emit('board updates', updates);
            socket.emit('draw tiles', getTilesFromRack());
    });
})


// Dom updates
function updateBoard(update){
    $.each(update, function(k,v){
        $('#board .space[data-coords="'+k+'"]')
            .play(v)
    })
}

$.fn.play = play;
function play(v){
    return $(this)
                .removeClass('space')
                .addClass('tile')
                .html(v)
}

function getTilesFromRack(){
    var tiles = '';
    $('.rack .tile').each(function(){
        tiles += $(this).html();
    })
    return tiles;
}
function addTilesToRack(tiles){
    var rack = $('.rack');
    $.each(tiles, function(i,v){
        $('<div>')
            .addClass('tile not-played')
            .text(v)
            .appendTo(rack);
    })
}