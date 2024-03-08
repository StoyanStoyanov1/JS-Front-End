function carWash(cars) {
    let percentCarClean = 0

    for (let command of cars) {
        switch (command) {
            case 'soap': percentCarClean += 10; break;
            case 'water': percentCarClean *= 1.20; break;
            case 'vacuum cleaner': percentCarClean *= 1.25; break;
            case 'mud': percentCarClean *= 0.90; break;
        }

    }

    return `The car is ${percentCarClean.toFixed(2)}% clean.`
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]))
