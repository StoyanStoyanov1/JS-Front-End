function cookingByNumbers (number, ...operators) {
    number = parseInt(number)
    const possibleOperators = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => (num * 0.80).toFixed(1)
    }

    for (let i of operators) {
        number = possibleOperators[i](number)
        console.log(number)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')