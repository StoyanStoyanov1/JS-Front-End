function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let aureus = 0
    let trashedArmor = false

    for (let lost = 2; lost <= lostFights; lost++) {
        if (lost % 2 === 0) {
            aureus += helmetPrice;
        }

        if (lost % 3 === 0) {
            aureus += swordPrice
        }

        if (lost % 2 === 0 && lost % 3 === 0) {
            aureus += shieldPrice
            if (trashedArmor) {
                trashedArmor = false;
                aureus += armorPrice
            } else {
                trashedArmor += true
            }

        }

    }


    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`)
}


gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)