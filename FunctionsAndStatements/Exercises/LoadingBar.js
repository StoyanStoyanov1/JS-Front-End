function loadingBar(number) {
    if (number === 100) {
        return "100% Complete!\n" +
            "[%%%%%%%%%%]"
    }

    const countLoadingBar = Math.floor(number / 10)

    return `${number}% [${'%'.repeat(countLoadingBar) + '.'.repeat(10 - countLoadingBar)}]\nStill loading...`
}

console.log(loadingBar(30))
console.log(loadingBar(50))
console.log(loadingBar(100))
console.log(loadingBar(33))
console.log(loadingBar(77))