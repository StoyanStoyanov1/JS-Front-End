function printAndSum (start, end) {
    const numbers = []
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i
        numbers.push(i)
    }

    console.log(numbers.join(' '))
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)