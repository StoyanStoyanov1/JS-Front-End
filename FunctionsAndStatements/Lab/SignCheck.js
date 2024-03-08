function signCheck (...arrNumbers) {
    let negativeNumbers = 0
    for (let num of arrNumbers) {
        if (num < 0) {
            negativeNumbers++
        }
    }

    if (negativeNumbers % 2 === 0) {
       return console.log("Positive")
    }

    console.log('Negative')
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)