function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    const tickets = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16
        },
        "Regular": {
            "Friday": 15,
            "Saturday": 20,
            "Sunday": 22.50
        }
    }

    let totalPrice = tickets[typeOfTheGroup][dayOfTheWeek] * groupOfPeople

    if (typeOfTheGroup === "Students" && groupOfPeople >= 30) {
        totalPrice *= 0.85
    } else if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        totalPrice -= tickets[typeOfTheGroup][dayOfTheWeek] * 10
    } else if (typeOfTheGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, 'Students', 'Sunday')
vacation(40, 'Regular', 'Saturday')