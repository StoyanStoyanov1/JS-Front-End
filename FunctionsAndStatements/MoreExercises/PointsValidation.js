function pointsValidation(points) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValidDistance(distance) {
        return Number.isInteger(distance);
    }

    let [x1, y1, x2, y2] = points;

    let distanceToOriginPoint1 = calculateDistance(x1, y1, 0, 0);
    let distanceToOriginPoint2 = calculateDistance(x2, y2, 0, 0);
    let distanceBetweenPoints = calculateDistance(x1, y1, x2, y2);

    console.log(isValidDistance(distanceToOriginPoint1) ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(isValidDistance(distanceToOriginPoint2) ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(isValidDistance(distanceBetweenPoints) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])

