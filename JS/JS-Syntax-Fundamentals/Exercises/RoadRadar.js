function roadRadar(currentSpeed, currentArea){
    const areaLimit = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    let status;
    const speedLimit = areaLimit[currentArea]
    const difference = speedLimit - currentSpeed

    if (difference >= 0){
        console.log(`Driving ${currentSpeed} km/h in a ${areaLimit[currentArea]} zone`)
    }


    else {

        if (Math.abs(difference) > 40){
            status = "reckless driving"
        }
        else if (Math.abs(difference) > 20){
            status = "excessive speeding"
        }
        else{
            status = "speeding"
        }

        console.log(`The speed is ${Math.abs(difference)} km/h faster than the allowed speed of ${speedLimit} - ${status}` )
    }
}