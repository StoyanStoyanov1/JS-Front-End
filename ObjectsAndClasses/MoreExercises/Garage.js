function garage(arrOfStrings) {
    const garage = {}
    const result = []

    for (let currentStr of arrOfStrings) {
        const [garageNum, moreInfo] = currentStr.split(' - ')
        const carInfo = moreInfo.split(': ').join(' - ')
        if (!(garageNum in garage)) {
            garage[garageNum] = []
        }

        garage[garageNum].push(carInfo)
    }

    Object.entries(garage).forEach(([garNum, carInfo]) => {
        result.push(`Garage № ${garNum}`)
        result.push(`--- ${carInfo.join('\n--- ')}`)
    })

    return result.join('\n')

}

console.log(garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']))