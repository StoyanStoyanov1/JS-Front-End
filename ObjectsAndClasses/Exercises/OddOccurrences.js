function oddOccurrences (input) {
    const objInput  = {}
    input.split(' ').forEach(word => {
        word = word.toLowerCase()
        if (!(word in objInput)) {
            objInput[word] = 0
        }

        objInput[word] += 1
    })

    const oddNumberOfTimes = Object.keys(objInput).filter(key => objInput[key] % 2 !== 0)
    return oddNumberOfTimes.join(' ')
}

console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))
console.log(oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'))
