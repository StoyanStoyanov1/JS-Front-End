function sumDigits(digits) {
    const numbers = []
    for (let digit of digits.toString()) {
        numbers.push(parseInt(digit))
    }

    const sumOfNumbers = numbers.reduce((a, b) => a + b)

    console.log(sumOfNumbers)
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)