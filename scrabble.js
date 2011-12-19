exports.tiles='EEEEEEEEEEEE\
AAAAAAAAAIIIIIIIIIOOOOOOOON\
NNNNNRRRRRRTTTTTTLLLLSSSSUU\
UUDDDDGGGBBCCMMPPFFHHVVWWYY\
KJXQZ  '; // created with ./bin/parse_letter_distributions.py and then added two blanks

exports.getNewAndRemainingTiles = function(oldPlayerTiles, oldRemainingTiles){
    var newTiles = ''
    , newRemainingTiles = ''
    , tilesToGet = 7 - oldPlayerTiles.length
    , pos;
    for (var i = 0; i < tilesToGet; i++){
        pos = Math.floor(Math.random() * oldRemainingTiles.length);
        newTiles += oldRemainingTiles[pos];
        newRemainingTiles += oldRemainingTiles.substring(0, pos) 
                           + oldRemainingTiles.substring(pos+1);
    }
    return [newTiles, newRemainingTiles];
}
