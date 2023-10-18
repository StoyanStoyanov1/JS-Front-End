function wordsUppercase(text) {
    const result = []
    let word = ''
    for (let i = 0; i < text.length; i++) {

        if (/[A-Za-z1-9]/.test(text[i])) {
            word += text[i].toUpperCase()
        } else {
            if (word.length > 0) {
                result.push(word)
                word = ''
            }
        }

        if (i === text.length - 1) {
            if (word.length > 0) {
                result.push(word)
                word = ''
            }
        }
    }


    console.log(result.join(', '))

}

wordsUppercase('Hi, how are you?')
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')