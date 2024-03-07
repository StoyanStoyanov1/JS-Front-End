function perfectNumber (number) {
    const dividedNumbers = [];

    for (let num = 1; num <= number / 2; num++) {
        if (number % num === 0) {
            dividedNumbers.push(num);
        }
    }

    const sum = dividedNumbers.reduce((sum, digit) => sum += digit, 0);

    return sum === number ? "We have a perfect number!": "It's not so perfect.";
}

console.log(perfectNumber(6))
console.log(perfectNumber(28))
console.log(perfectNumber(1236498))