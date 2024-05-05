function makeADictionary (arr) {
    const obj = {};
    arr.forEach(json => {
        const currentObj = JSON.parse(json);
        Object.assign(obj, currentObj);
    });

    const result = []

    const sortedObj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    sortedObj.forEach(([key, value]) => {
        const term = key
        const definition = value
        result.push(`Term: ${term} => Definition: ${definition}`)

    })

    return result.join('\n')
}

console.log(makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]))