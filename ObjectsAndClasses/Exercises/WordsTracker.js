function wordsTracker(arrWords) {
    const matchWords = arrWords.shift().split(' ').reduce((obj, word) => {
        obj[word] = 0
        return obj
    }, {})

    arrWords.forEach(word => {
        if (word in matchWords) {
            matchWords[word] += 1
        }
    })

    const sortedInDescending = Object.entries(matchWords).sort((a, b) => b[1] - a[1])
    const result = []
    sortedInDescending.forEach(([word, value]) => {
        result.push(`${word} - ${value}`)
    })

    return result.join('\n')

}

console.log(wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]))

console.log(wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']))