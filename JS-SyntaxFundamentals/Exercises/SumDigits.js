function sumDigits(numbers) {
    const numStr = numbers.toString();
    let sum = 0;

    for (let digit of numStr) {
        sum += parseInt(digit);
    }

    console.log(sum)
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)