function passwordValidator(password) {
    const notValid = [];
    const countDigits = password
        .split('')
        .reduce((sum, digit) => /\d/
            .test(digit) ? sum += 1 : sum += 0, 0);

    const countLetters = password
        .split('')
        .filter(char => /[A-Za-z]/.test(char))
        .length;

    if (password.length < 6 || password.length > 10) {
        notValid.push("Password must be between 6 and 10 characters");
    }

    if (countDigits + countLetters !== password.length) {
        notValid.push("Password must consist only of letters and digits");
    }

    if (countDigits < 2) {
        notValid.push("Password must have at least 2 digits");
    }

    return (!notValid.length) ? "Password is valid" : notValid.join('\n')
}

console.log(passwordValidator('logIn'))
console.log(passwordValidator('MyPass123'))
console.log(passwordValidator('Pa$s$s'))