exports.tiles='EEEEEEEEEEEE\
AAAAAAAAAIIIIIIIIIOOOOOOOON\
NNNNNRRRRRRTTTTTTLLLLSSSSUU\
UUDDDDGGGBBCCMMPPFFHHVVWWYY\
KJXQZ  '; // created with ./bin/parse_letter_distributions.py and then added two blanks

exports.getNewAndRemainingTiles = function(oldPlayerTiles, oldRemainingTiles){
    var newTiles = ''
    , newRemainingTiles = oldRemainingTiles
    , tilesToGet = 7 - oldPlayerTiles.length
    , pos;
    for (var i = 0; i < tilesToGet; i++){
        pos = Math.floor(Math.random() * newRemainingTiles.length);
        newTiles += newRemainingTiles[pos];
        newRemainingTiles = newRemainingTiles.substring(0, pos) 
                          + newRemainingTiles.substring(pos+1);
    }
    return [newTiles, newRemainingTiles];
}
