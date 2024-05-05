function roadRadar(speed, area) {
    const speedLimit = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130
    }

    let difference = speed - speedLimit[area]
    let status;

    if (difference <= 20) {
        status = 'speeding'
    }  else if (difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    if (speed > speedLimit[area]) {

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`)
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')