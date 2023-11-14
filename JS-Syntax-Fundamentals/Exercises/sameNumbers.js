function sameNumbers(numbers) {
    const digits = [];
    const sameNumbers = new Set();

    for (let i of numbers.toString()) {
        sameNumbers.add(i);
        digits.push(parseInt(i));
    }

    if (sameNumbers.size > 1) {
        console.log(false);
    } else {
        console.log(true);
    }

    console.log(digits.reduce((a, b) => a + b));
}

sameNumbers(2222222);
sameNumbers(1234);