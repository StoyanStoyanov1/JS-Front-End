function charactersInRange(firstSymbol, secondSymbol) {
    const startChar = (firstSymbol.charCodeAt(0) < secondSymbol.charCodeAt(0))
        ? firstSymbol.charCodeAt(0) : secondSymbol.charCodeAt(0);
    const endChar = (firstSymbol.charCodeAt(0) > secondSymbol.charCodeAt(0))
        ? firstSymbol.charCodeAt(0) : secondSymbol.charCodeAt(0);

    const listOfSymbols = []

    for (let char = startChar + 1; char < endChar; char++) {
        listOfSymbols.push(String.fromCharCode(char));
    }

    console.log(listOfSymbols.join(' '))
}

charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')