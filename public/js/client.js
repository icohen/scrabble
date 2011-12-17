// socket.io specific code
var socket = io.connect();
socket.on('board update', function(update){
    console.log('board update', update);
    updateBoard(update);
});
socket.on('new tile', function(tile){
    console.log('new tile', tile);
    addTileToRack(tile);
});
socket.on('no tiles re')

// events
$(function(){
    $('#board input').change(function(){
        var update = {}
            , coords = $(this).data('coords')
            , tile = $(this).val();
        update[coords] = tile;
        socket.emit('board update', update)
    })
})

// Dom updates
function updateBoard(update){
    $.each(update, function(k,v){
        $('#board input[data-coords="'+k+'"]')
            .val(v)
            .attr('readonly', true)
    })
}
function addTileToRack(tile){
    return;
}