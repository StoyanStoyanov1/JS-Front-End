function countStringOccurrences (text, word) {
    let counter = 0;

    for (let currentWord of text.split(' ')) {
        if (currentWord === word) {
            counter += 1
        }
    }

    console.log(counter)
}

countStringOccurrences('This is a word and it also is a sentence', 'is')
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni')