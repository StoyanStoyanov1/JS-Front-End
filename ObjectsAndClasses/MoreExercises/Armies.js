function armies(arrInput) {
    const objArmies = {};
    const result = [];
    for (const input of arrInput) {
        if (input.includes('arrives')) {
            const leader = input.replace(' arrives', '');
            objArmies[leader] = {totalCount: 0, armies: []};
        } else if (input.includes('defeated')) {
            const leader = input.replace(' defeated', '')
            delete objArmies[leader];
        } else if (input.includes(':')) {
            const [leader, armInfo] = input.split(': ');
            let [armName, count] = armInfo.split(', ');
            count = parseInt(count)
            const objLeader = {armName, count}
            if (leader in objArmies) {
                objArmies[leader].armies.push(objLeader);
                objArmies[leader].totalCount += count;
            }
        } else if (input.includes('+')) {
            let [armName, count] = input.split(' + ')
            count = parseInt(count);
            for (const [leader, armInfo] of Object.entries(objArmies)) {
                const foundIndex = armInfo.armies.findIndex(arm => arm.armName === armName);

                if (foundIndex >= 0) {
                    objArmies[leader].totalCount += count;
                    objArmies[leader].armies[foundIndex].count += count;
                    break;
                }

            }
        }


    }
    const sortedArmies = Object.entries(objArmies).sort((a, b) => b[1].totalCount - a[1].totalCount)

    sortedArmies.forEach(([leader, objArm]) => {
        result.push(`${leader}: ${objArm.totalCount}`)
        objArm.armies.sort((a, b) => b.count - a.count)
        objArm.armies.forEach(arm => {
            result.push(`>>> ${arm.armName} - ${arm.count}`)
        })
    })

    return result.join('\n')
}

console.log(armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']))
console.log(armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']))
