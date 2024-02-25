function ages(age) {
    let result;

    if (age >= 66) {
        result = 'elder';
    } else if (age >= 20) {
        result = 'adult';
    } else if (age >= 14) {
        result = 'teenager';
    } else if (age >= 3) {
        result = 'child';
    } else if (age >= 0) {
        result = 'baby';
    } else {
        result = 'out of bounds';
    }

    console.log(result)
}

ages(20)
ages(1)
ages(100)
ages(-1)