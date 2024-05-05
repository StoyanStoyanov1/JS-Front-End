function reverseAnArrayOfNumbers (n, array) {
    console.log(array.slice(0 , n).reverse().join(' '))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])