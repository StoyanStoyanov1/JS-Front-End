function stringSubstring (searchWord, text) {
    for (let word of text.split(' ')) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
           return console.log(searchWord.toLowerCase())
        }
    }

    console.log(`${searchWord.toLowerCase()} not found!`)
}

stringSubstring('javascript', 'JavaScript is the javascript best programming language')
stringSubstring('python', 'JavaScript is the best programming language')