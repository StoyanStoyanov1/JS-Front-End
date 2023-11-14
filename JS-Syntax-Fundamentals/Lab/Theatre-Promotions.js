function theatrePromotions(typeOfDay, age) {
    const tickets = {
        'Weekday': {'child': 12, 'parent': 18, 'old': 12},
        'Weekend': {'child': 15, 'parent': 20, 'old': 15},
        'Holiday': {'child': 5, 'parent': 12, 'old': 10}
    }

    let result;

    if (age < 0 || age > 122) {
        result = 'Error!'
    } else if (age <= 18) {
        result = tickets[typeOfDay]['child'] + '$'
    } else if (age <= 64) {
        result = tickets[typeOfDay]['parent'] + '$'
    } else {
        result = tickets[typeOfDay]['old'] + '$'
    }

    console.log(result)
}

theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)