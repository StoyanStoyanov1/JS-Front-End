function addressBook(arrAddressBook) {
    const objAddressBook = {}

    arrAddressBook.forEach(info => {
        const [name, address] = info.split(':')
        objAddressBook[name] = address
    })

    const sortedObjAddressBook = Object.keys(objAddressBook).sort().reduce((newObj, key) => {
        newObj[key] = objAddressBook[key]
        return newObj
    }, {})

    const result = Object.entries(sortedObjAddressBook).map(([key, value]) => `${key} -> ${value}`)

    return result.join('\n')
}

console.log(addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']))