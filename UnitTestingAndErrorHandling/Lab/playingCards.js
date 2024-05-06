function playingCards (cardFaces, cardSuit) {
	const validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "L", "K", "A"];
	const validCardSuits = {"S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663"}

	if (!validCardFaces.includes(cardFaces) || !(cardSuit in validCardSuits)) {
		throw new Error('Error')
	};

	return cardFaces + validCardSuits[cardSuit];
}

console.log(playingCards('A', 'S'))
console.log(playingCards('10', 'H'))
console.log(playingCards('1', 'C'))
