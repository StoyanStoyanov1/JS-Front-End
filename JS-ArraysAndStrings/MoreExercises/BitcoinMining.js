function bitcoinMining (arrNumber) {
    const bitcoin = 11949.16;
    const priceGramGold = 67.51;
    let money = 0;
    let boughtBitcoins = 0;
    let dayFirstBitcoin = 0;

    for (let day = 1; day <= arrNumber.length; day++) {
        let todayGold = arrNumber[day - 1];
        if (day % 3 === 0) {
            todayGold *= 0.7;
        }

        money += todayGold * priceGramGold
        if (money >= bitcoin) {
            if (!dayFirstBitcoin) {
                dayFirstBitcoin = day;
            }
            let countOfBoughtCoins = Math.floor(money / bitcoin)
            boughtBitcoins += countOfBoughtCoins
            money -= countOfBoughtCoins * bitcoin
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (dayFirstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}` )
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300])
bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])

