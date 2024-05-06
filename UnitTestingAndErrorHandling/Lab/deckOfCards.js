function printDeckOfCards(cards) {
	function createCard (cardStr){
		const validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "L", "K", "A", "Q"];
		const validCardSuits = {"S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663"}

		const cardFaces = cardStr.slice(0, -1);
		const cardSuit = cardStr.slice(-1);
		if (!validCardFaces.includes(cardFaces) || !(cardSuit in validCardSuits)) {
			throw new Error(`Invalid card: ${cardFaces + cardSuit}`);
		}

		return cardFaces + validCardSuits[cardSuit];
	}

	try {
		const formattedCards = cards.map(createCard);
		console.log(formattedCards.join(' '))
	} catch (error) {
		console.log(error.message)
	}

}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
