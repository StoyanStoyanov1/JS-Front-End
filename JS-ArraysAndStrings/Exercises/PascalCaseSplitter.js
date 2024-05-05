function pascalCaseSplitter(text) {
    const result = []
    let word = ''

    for (let letter of text) {

        if (letter.match(/[A-Z]/) && word) {
            result.push(word)
            word = ''
        }

        word += letter
    }

    if (word) {
        result.push(word)
    }

    console.log(result.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')