function NxNMatrix(n) {
    const matrix = []

    for (let col = 0; col < n; col++) {
        matrix[col] = []
        for (let row = 0; row < n; row ++) {
            matrix[col].push(n)
        }
    }

    return matrix.map(row => row.join(' ')).join('\n')
}

console.log(NxNMatrix(5))
console.log(NxNMatrix(7))
console.log(NxNMatrix(2))

