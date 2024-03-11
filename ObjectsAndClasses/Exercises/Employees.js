function employees (arrEmployees) {
    const objEmployees = arrEmployees.reduce((employee, name) => {
        employee[name] = name.length
        return employee
    }, {})

    Object.entries(objEmployees).forEach(([name, num]) => console.log(
        `Name: ${name} -- Personal Number: ${num}`
    ))
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])