function sameNumbers (number) {
    const sameNumbers = new Set();
    let sum = 0;

    for (let i of number.toString()) {
        sum += parseInt(i)
        sameNumbers.add(i)
    }

    console.log(sameNumbers.size > 1 ? 'false': 'true')
    console.log(sum)
}

sameNumbers(2222222)
sameNumbers(1234)

9