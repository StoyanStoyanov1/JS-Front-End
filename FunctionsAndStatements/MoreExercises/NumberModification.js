function numberModification(number) {
    const arrNumbers = number.toString().split('').map(d => parseInt(d))

    let averageValue = arrNumbers.reduce((sum, digit) => sum + digit, 0) / arrNumbers.length
    while (averageValue <= 5) {
        arrNumbers.push(9)
        averageValue = arrNumbers.reduce((sum, digit) => sum + digit, 0) / arrNumbers.length
    }

    return arrNumbers.join('')
}

console.log(numberModification(101))
console.log(numberModification(5835))