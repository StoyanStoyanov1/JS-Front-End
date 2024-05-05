function listOfNames (arrNames) {
    const sortArrNames = arrNames.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortArrNames.length; i++) {
        console.log(`${i + 1}.${sortArrNames[i]}`)
    }
}

listOfNames(["John", "Bob", "Christina" , "Ema"])