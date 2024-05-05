function meeting(info) {
    const weekdays = {}

    for (let data of info) {
        const [day, name] = data.split(' ')
        if ((day in weekdays)) {
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`)
            weekdays[day] = name
        }
    }

    Object.entries(weekdays).forEach(([day, name]) => {
        console.log(`${day} -> ${name}`)
    })
}

meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])