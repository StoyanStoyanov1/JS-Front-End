function vacation(people, groupType, day) {
    let price;

    switch (day) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    price = 8.45;
                    break;
                case 'Business':
                    price = 10.90;
                    break;
                case 'Regular':
                    price = 15;
                    break;

            }
            break;
        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    price = 9.80;
                    break;
                case 'Business':
                    price = 15.60;
                    break;
                case 'Regular':
                    price = 20;
                    break;
            }
            break;
        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    price = 10.46;
                    break;
                case 'Business':
                    price = 16;
                    break;
                case 'Regular':
                    price = 22.50;
                    break;
            }
            break;
    }

    let totalPrice = price * people

    if (groupType === 'Students' && people >= 30) {
        totalPrice *= 0.85
    } else if (groupType === 'Business' && people >= 100){
        totalPrice -= price * 10
    } else if (groupType === 'Regular' && (10 <= people && people <= 20)) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, 'Students', 'Sunday')
vacation(40, 'Regular', 'Saturday')
