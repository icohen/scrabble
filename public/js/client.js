// socket.io specific code
var socket = io.connect();
socket.on('board update', function(update){
	console.log('board update', update)
	updateBoard(update);
});

// events
$(function(){
	$('#board input').change(function(){
		var update = {}
			, coords = $(this).data('coords')
			, letter = $(this).val();
		update[coords] = letter;
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