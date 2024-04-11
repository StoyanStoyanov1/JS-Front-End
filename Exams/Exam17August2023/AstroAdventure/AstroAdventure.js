function astroAdventure (arrInput) {
    class Astronaut {
        constructor(name, oxygen, energy) {
            this.name = name;
            this.oxygen = Number(oxygen);
            this.energy = Number(energy);
        }

        explore (needEnergy) {
            if (this.energy >= needEnergy) {
                this.energy -= needEnergy;
                return `${this.name} has successfully explored a new area and now has ${this.energy} energy!`
            }

            return  `${this.name} does not have enough energy to explore!`
        }

        refuel (amount) {
            const maxEnergy = 200;
            this.energy += amount;

            if(this.energy > maxEnergy) {
                amount =  amount - (this.energy - maxEnergy);
                this.energy = maxEnergy;
            }

            return `${this.name} refueled their energy by ${amount}!`

        }

        breathe (amount) {
            const maxOxygen = 100;
            this.oxygen += amount;

            if (this.oxygen > maxOxygen) {
                amount -= (this.oxygen - maxOxygen);
                this.oxygen = maxOxygen
            }

            return `${this.name} took a breath and recovered ${amount} oxygen!`
        }
    }

    const numberOfAstronaut = parseInt(arrInput.shift());
    const astronauts = [];

    for (let i = 0; i < numberOfAstronaut; i++) {
        const [name, oxygen, energy] = arrInput.shift().split(' ');
        astronauts.push(new Astronaut(name, oxygen, energy));
    }

    while (arrInput[0] !== 'End') {
        const [command, name, mount] = arrInput.shift().split(' - ');
        const astronaut = findAstronaut(name);

        if (command === 'Explore') {
            console.log(astronaut.explore(Number(mount)))
        } else if (command === 'Refuel') {
            console.log(astronaut.refuel(Number(mount)));
        } else if (command === 'Breathe') {
            console.log(astronaut.breathe(Number(mount)));
        }
    }

    function findAstronaut(astronautName) {
        for (const astronaut of astronauts) {
            if (astronaut.name === astronautName) {
                return astronaut
            }
        }
    }

    astronauts.forEach(astronaut => console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`))
}

astroAdventure([  '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'])