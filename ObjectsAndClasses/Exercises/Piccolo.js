function piccolo(input) {
    const parking = new Set()
    input.forEach(currentInput => {
        const [direction, carNumber] = currentInput.split(', ')
        if (direction === 'IN') {
            parking.add(carNumber)
        } else {
            parking.delete(carNumber)
        }
    })

    const sortedParking = Array.from(parking).sort((a, b) => a.localeCompare(b, 'en', {numeric: true}))
    return sortedParking.length > 0 ? sortedParking.join('\n') : 'Parking Lot is Empty'
}

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']))

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']))

