function modernTimesOfHashTag (text) {
    const result = []
    for (let word of text.split(' ')) {
        if (word.startsWith("#") && word.length > 1) {
            word = word.slice(1)
            if (/^[A-Za-z]+$/.test(word)) {
                result.push(word)
            }
        }
    }
    console.log(result.join('\n'))
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesOfHashTag('The symbol #  is known #variously in English-speaking #regions as the #number sign')