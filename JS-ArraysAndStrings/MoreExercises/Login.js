function login (arrPasswords) {
    const username =  arrPasswords[0]
    let attemptCounter = 0

    for (let i = 1; i < arrPasswords.length; i++) {
        if (arrPasswords[i].split('').reverse().join('')=== username) {
            return console.log(`User ${username} logged in.`)
        }

        if (attemptCounter === 3) {
            return console.log(`User ${username} blocked!`)
        }

        console.log("Incorrect password. Try again.")
        attemptCounter += 1

    }
}

login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])