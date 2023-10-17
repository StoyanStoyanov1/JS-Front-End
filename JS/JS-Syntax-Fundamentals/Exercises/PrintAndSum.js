function printAndSum(start, end) {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i)
    }

    const sumNumbers = numbers.reduce((a, b) => a + b)

    console.log(`${numbers.join(' ')}\nSum: ${sumNumbers}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)