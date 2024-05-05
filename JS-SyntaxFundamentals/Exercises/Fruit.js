function fruit (fruit, grams, price) {
    const kg = grams / 1000;
    let money = price * kg

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)