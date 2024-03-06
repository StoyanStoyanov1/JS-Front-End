function oddAndEvenSum (number) {
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of number.toString()) {
        if (digit % 2 === 0) {
            evenSum += parseInt(digit);
        } else {
            oddSum += parseInt(digit);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)
oddAndEvenSum( 3495892137259234)