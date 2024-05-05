function revealWords (words, text) {
    words = words.split(', ');
    const result = [];
    for (let currentWord of text.split(' ')) {
        if (currentWord === '*'.repeat(currentWord.length)) {
            for (let word of words) {
                if (word.length === currentWord.length) {
                    currentWord = word
                }
            }
        }

        result.push(currentWord)
    }

    console.log(result.join(' '))
}

revealWords('great', 'softuni is ***** place for learning new programming languages'	)
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')