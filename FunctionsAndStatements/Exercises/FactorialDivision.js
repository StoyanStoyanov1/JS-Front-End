function factorialDivision (number, divideNumber) {
    function factorial (number) {
        let sum = 1;
        for (let num = 2; num <= number; num++) sum *= num;
        return sum
    }
    return (factorial(number) / factorial(divideNumber)).toFixed(2)
}

console.log(factorialDivision(5,2));
console.log(factorialDivision(6,2));