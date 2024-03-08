function printDNA(n) {
    const result = [];
    let count = 2;
    const helix = 'ATCGTTAGGG'.split('');
    let currentOperator = '-';
    let index = 0;

    for (let i = 1; i <= n; i++) {

        const stars = "*".repeat(count);
        const firstLetter = helix[index];
        const secondLetter = helix[index + 1];
        const minus = "-".repeat(Math.abs(count - 2) * 2);
        result.push(stars + firstLetter + minus + secondLetter + stars)

        index = index + 2 < 10 ? index + 2: index + 2 - 10;

        if (currentOperator === "-") {
            count -= 1;
            if (count === 0) {
                currentOperator = '+';
            }
        } else {
            count += 1;
            if (count === 2) {
                currentOperator = '-';
            }
        }
    }

    return result.join('\n');
}

console.log(printDNA(4));
console.log(printDNA(10));