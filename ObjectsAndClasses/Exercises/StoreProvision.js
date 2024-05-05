function storeProvision(...arrProducts) {
    const objProducts = {}

    for (const products of arrProducts) {
        for (let i = 0; i < products.length; i += 2) {
            const product = products[i]
            const countProduct = parseInt(products[i + 1])
            if (!(product in objProducts)) {
                objProducts[product] = 0
            }

            objProducts[product] += countProduct
        }
    }
    Object.entries(objProducts).forEach(([product, count]) => console.log(product + ' -> ' + count))
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])

storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])