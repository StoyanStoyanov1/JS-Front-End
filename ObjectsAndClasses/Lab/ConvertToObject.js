function convertToObject (info) {
    const person = JSON.parse(info)
    Object.entries(person).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')