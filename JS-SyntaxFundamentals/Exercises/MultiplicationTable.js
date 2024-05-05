function multiplicationTable(number) {
    const table = []

    for (let i = 1; i <= 10; i++) {
        table.push(`${number} X ${i} = ${number * i}`)
    }

    console.log(table.join('\n'))
}

multiplicationTable(5)
multiplicationTable(2)