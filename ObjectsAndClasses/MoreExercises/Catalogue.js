function catalogue (input) {
    const objCatalogue = {}

    for (const text of input) {
        const key = text[0]
        const [productName, productPrice] = text.split(' : ')
        if (!(key in objCatalogue)) {
            objCatalogue[key] = {}
        }

        objCatalogue[key][productName] = productPrice
    }

    const sortedCatalogue = Object.keys(objCatalogue).sort()
    const result = []
    sortedCatalogue.forEach(key => {
        const sortedProducts = Object.keys(objCatalogue[key]).sort((a, b) => a.localeCompare(b, 'en'))
        result.push(key)
        sortedProducts.forEach(product => {
            result.push(`  ${product}: ${objCatalogue[key][product]}`)
        })
    })
    return result.join('\n')
}

console.log(catalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
))