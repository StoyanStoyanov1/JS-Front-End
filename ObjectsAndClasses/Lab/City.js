function city (info) {
    Object.entries(info).forEach((data) => {
        console.log(`${data[0]} -> ${data[1]}`)
    })
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})