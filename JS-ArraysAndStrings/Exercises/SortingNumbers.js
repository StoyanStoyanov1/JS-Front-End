function sortingNumbers (arrNumbers) {
    arrNumbers.sort((a , b) => a - b);
    const sortedArrNumbers = [];
    let startIndex = 0;
    let endIndex = arrNumbers.length - 1;

    while (startIndex <= endIndex) {
        if (startIndex === endIndex) {
            sortedArrNumbers.push(arrNumbers[startIndex])
            break;
        }

        sortedArrNumbers.push(arrNumbers[startIndex]);
        sortedArrNumbers.push(arrNumbers[endIndex]);
        startIndex += 1;
        endIndex -= 1;
    }

    return sortedArrNumbers
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))