function printEveryNThElementFromAnArray(arr, n) {
    const newArr = []

    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr[i])
    }

    return newArr
}

console.log(printEveryNThElementFromAnArray(['5', '20', '31', '4', '20'], 2))
console.log(printEveryNThElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2))
console.log(printEveryNThElementFromAnArray(['1', '2', '3', '4', '5'], 6))