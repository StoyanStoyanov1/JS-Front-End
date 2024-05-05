function motoGP(arrInput) {

    class Rider {
        constructor(rider, fuelCapacity, position) {
            this.rider = rider;
            this.fuelCapacity = fuelCapacity;
            this.position = position;
        }

        stopForFuel(minimumFuel, changedPosition) {
            if (Number(this.fuelCapacity) < Number(minimumFuel)) {
                this.position = changedPosition;
                console.log(`${this.rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                return;
            }

            console.log(`${this.rider} does not need to stop for fuel!`);

        }

        overtaking (otherRider) {
            if (Number(this.position) < Number(otherRider.position)) {
                const otherPosition = otherRider.position;
                otherRider.position = this.position;
                this.position = otherPosition;
                console.log(`${this.rider} overtook ${otherRider.rider}!`);
            }
        }

    }

    const numberOfRiders = Number(arrInput.shift());
    let riders = [];

    for (let i = 0; i < numberOfRiders; i++) {
        const rider = new Rider(...arrInput.shift().split('|'))
        riders.push(rider);
    }

    while (arrInput[0] !== 'Finish') {
        const [command, riderName, ...rest] = arrInput.shift().split(' - ');
        const rider = riders.find(rider => rider.rider === riderName);

        if (command === 'StopForFuel') {
            rider.stopForFuel(...rest);
        } else if (command === 'Overtaking') {
            const otherRider = riders.find(currentRider => currentRider.rider === rest[0]);
            rider.overtaking(otherRider);
        } else {
            riders = riders.filter(currentRider => currentRider.rider !== rider.rider)
            console.log(`${rider.rider} is out of the race because of a technical issue, ${rest[0]} laps before the finish.`)
        }
    }

    riders.forEach(rider => console.log(`${rider.rider}\n Final position: ${rider.position}`))
}

motoGP(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
