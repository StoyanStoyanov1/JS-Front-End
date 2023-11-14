function gladiatorExpenses(losFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let aureus = 0
    let countShieldBreak = 0
    for (let los = 2; los <= losFights; ++los) {
        let helmetBreak = false
        let swordBreak  = false
        if (los % 2 === 0) {
            helmetBreak = true
            aureus += helmetPrice
        }

        if (los % 3 === 0) {
            swordBreak = true
            aureus += swordPrice
        }

        if (helmetBreak && swordBreak) {
            countShieldBreak += 1
            aureus += shieldPrice
            if (countShieldBreak === 2) {
                countShieldBreak = 0
                aureus += armorPrice
            }

        }
    }

    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`)
}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)