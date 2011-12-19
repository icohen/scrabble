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
                console.log('stop', ui.draggable);
                socket.emit('tile order change', getTilesFromRack());
              },
            remove: function(e, ui){
                console.log('remove', ui.item);
                console.log('from', ui.sender);
                console.log('to', $(this));
            }
         }).disableSelection();
    $('.space')
        .sortable({
              connectWith: '.rack',
              revert: true,
              stop: function(e, ui){
                  console.log('.space stop', ui.draggable);
              },              
        }).disableSelection()
        
    // events
    $('#draw').click(function drawTilesHandler(){
        socket.emit('draw tiles', getTilesFromRack());
    });
    $('#play').click(function play(){
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