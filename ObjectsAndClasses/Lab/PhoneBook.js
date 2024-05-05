function phoneBook(info) {
    const result = {}
    info.forEach(data => {
        const [name, phone] = data.split(' ')
        result[name] = phone
    })

    Object.entries(result).forEach(([name, phone]) => {
        console.log(`${name} -> ${phone}`)
    })
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])