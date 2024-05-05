function palindromeIntegers(arrNumbers) {
    for (let number of arrNumbers) {
        let numberToString = number.toString()
        console.log((numberToString === numberToString.split('').reverse().join('')))
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])