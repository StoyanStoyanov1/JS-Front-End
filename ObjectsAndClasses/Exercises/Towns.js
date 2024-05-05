function towns(arrTowns) {
    const objTowns = arrTowns.map(info => {
        const [town, latitude, longitude] = info.split(' | ')
        return {
            town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        }
    })

    objTowns.forEach(obj => console.log(obj))
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)