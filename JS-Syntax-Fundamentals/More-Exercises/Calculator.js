function calculator(first_number, operator, second_number) {
    let result;

    switch (operator) {
        case '+': result = first_number + second_number; break
        case '-': result = first_number - second_number; break
        case '/': result = first_number / second_number; break
        case '*': result = first_number * second_number; break
    }

    console.log(result.toFixed(2))
}

calculator(5, '+', 10)
calculator(12, '/', 5)
calculator(12.2, '*', 15)