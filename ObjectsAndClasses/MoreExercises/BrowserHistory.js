function browserHistory(object, arrSting) {
    for (const command of arrSting) {
        if (command.startsWith('Open')) {
            object['Open Tabs'].push(command.substring(5))
        } else if (command.startsWith('Close')) {
            const site = command.substring(6)
            if (object['Open Tabs'].includes(site)) {
                object['Recently Closed'].push(site)
                const index = object['Open Tabs'].findIndex(item => item === site)
                object['Open Tabs'].splice(index, 1)
            } else {
                continue
            }
        } else if (command === 'Clear History and Cache') {
            object['Open Tabs'].splice(0, object['Open Tabs'].length)
            object['Recently Closed'].splice(0, object['Recently Closed'].length)
            object['Browser Logs'].splice(0, object['Browser Logs'].length)
            continue
        }

        object['Browser Logs'].push(command)
    }

    return `${object['Browser Name']}\nOpen Tabs: ${object['Open Tabs'].join(', ')}\nRecently Closed: ${object['Recently Closed'].join(', ')}\nBrowser Logs: ${object['Browser Logs'].join(', ')}`

}

console.log(browserHistory({
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
))

console.log(browserHistory({"Browser Name":"Mozilla Firefox",
        "Open Tabs":["YouTube"],
        "Recently Closed":["Gmail", "Dropbox"],
        "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

))