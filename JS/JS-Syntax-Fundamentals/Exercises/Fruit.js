function fruit (fruit, weight, money) {
    let weightKg = weight / 1000
    console.log(`I need $${(money * weightKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`
    )
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)