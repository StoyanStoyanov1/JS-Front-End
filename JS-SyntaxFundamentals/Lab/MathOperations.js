function MathOperations(num1, num2, operator) {
    let result;
    switch (operator) {
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }

    console.log(result)
}

MathOperations(5, 6, '+')
MathOperations(3, 5.5, '*')