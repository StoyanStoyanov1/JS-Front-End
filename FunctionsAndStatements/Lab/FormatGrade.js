function formatGrade (grade) {
    let result;
    if (grade < 3) {
        return console.log('Fail (2)')
    } else if (grade < 3.50) {
        result = 'Poor';
    } else if (grade < 4.50) {
        result = 'Good';
    } else if (grade < 5.50) {
        result = 'Very good';
    } else {
        result = 'Excellent'
    }

    console.log(`${result} (${grade.toFixed(2)})`)
}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)