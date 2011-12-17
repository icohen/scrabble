exports.tiles='EEEEEEEEEEEE\
AAAAAAAAAIIIIIIIIIOOOOOOOON\
NNNNNRRRRRRTTTTTTLLLLSSSSUU\
UUDDDDGGGBBCCMMPPFFHHVVWWYY\
KJXQZ  ' // created with ./bin/parse_letter_distributions.py and then added two blanks

exports.getRandomLetterAndRemainingLetters = function(letters){
	var pos = Math.floor(Math.random() * letters.length)
	  , randomLetter = letters[pos]
	  , remainingLetters = letters.substring(0, pos) + letters.substring(pos+1);
	return [randomLetter, remainingLetters];
}

