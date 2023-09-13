function LargestNumber(...numbers){
    let theLargestNumber = numbers.sort((a, b) => b - a)[0]
    console.log(`The largest number is ${theLargestNumber}.`)
}

LargestNumber(5, -3, 16)