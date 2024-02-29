function wordsUppercase(text) {
    const words = []
    let newWord = ''

    for (let letter of text) {
        if (letter.match(/[A-Za-z1-9]/)) {
            newWord += letter
        } else if (newWord) {
            words.push(newWord.toUpperCase())
            newWord = ''
        }
    }

    if (newWord) {
        words.push(newWord.toUpperCase())
    }

    console.log(words.join(', '))
}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')