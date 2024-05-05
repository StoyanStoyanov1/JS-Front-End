function arrayRotation (arr, numRotations) {
    for (let i = 0; i < numRotations; i++) {
        arr.push(arr.shift())
    }

    console.log(arr.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)