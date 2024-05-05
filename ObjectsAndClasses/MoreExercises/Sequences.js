function sequences(inputStrings) {
    const uniqueArrays = new Set();
    const orderedArrays = [];

    inputStrings.forEach(arr => {
        const numArr = JSON.parse(arr).sort((a, b) => b - a)
        const strArr = JSON.stringify(numArr)

        if (!(uniqueArrays.has(strArr))) {
            uniqueArrays.add(strArr)
            orderedArrays.push(numArr)
        }
    })

    orderedArrays.sort((a, b) => a.length - b.length )
    orderedArrays.forEach(arr => console.log(`[${arr.join(', ')}]`))
}



sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])