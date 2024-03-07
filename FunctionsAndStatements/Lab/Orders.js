function orders(product, count) {
    const productsPriceList = {'coffee': 1.50, 'water': 1, 'coke': 1.40, 'snacks': 2};
    const totalPrice = productsPriceList[product] * count
    console.log(totalPrice.toFixed(2))
}

orders('water', 5)
orders('coffee', 2)