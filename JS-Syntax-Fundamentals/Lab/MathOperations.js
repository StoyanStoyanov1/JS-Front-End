function MathOperations(firstNumber, secondNumber, operator){
    let result;
    switch (operator){
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "%": result = firstNumber % secondNumber; break;
        case "**": result = firstNumber ** secondNumber; break;
    }

    console.log(result)
}

MathOperations(3, 5.5, '*')
