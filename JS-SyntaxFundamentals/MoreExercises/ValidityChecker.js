function validityDistance(x1, y1, x2, y2) {

    const distance1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));


    const isDistance1Valid = Number.isInteger(distance1);


    const distance2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));


    const isDistance2Valid = Number.isInteger(distance2);


    const distanceBetweenPoints = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


    const isDistanceBetweenPointsValid = Number.isInteger(distanceBetweenPoints);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isDistance1Valid ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isDistance2Valid ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isDistanceBetweenPointsValid ? 'valid' : 'invalid'}`);
}

validityDistance(3, 4, 0, 0);
validityDistance(5, 12, 0, 0);
validityDistance(1, 1, 2, 2);