function spiceMustFlow(start) {
    let finalResult = 0
    let days = 0

    while (start >= 100) {
        days += 1
        start -= 26
        finalResult += start
        start += 16
    }

    finalResult -= 26
    finalResult = (finalResult > 0) ? finalResult : 0

    console.log(days)
    console.log(finalResult)

}

spiceMustFlow(111)
spiceMustFlow(450)