function cafeteria (input) {
    const numberOfBaristas = Number(input.shift());
    const arrayWithObjBaristas = [];

    for (let i = 0; i < numberOfBaristas; i++) {
        let [baristaName, shift, coffeeTypes] = input.shift().split(' ');
        coffeeTypes = coffeeTypes.split(',');

        const objBarista = {baristaName, shift, coffeeTypes};

        arrayWithObjBaristas.push(objBarista);
    }

    while (input[0] !== 'Closed') {
        const [command, baristaName, shift, coffeeType] = input.shift().split(' / ');
        if (command === 'Prepare') {
            console.log(prepare(baristaName, shift, coffeeType));
        } else if (command === 'Change Shift') {
            console.log(changeShift(baristaName, shift));
        } else if (command === 'Learn') {
            console.log(learn(baristaName,shift));
        }

    }

    function prepare (baristaName, shift, coffeeType) {
        for (const obj of arrayWithObjBaristas) {
            const isCoffeeAvailable = obj.coffeeTypes.some(type => type === coffeeType);
            if (isCoffeeAvailable && obj.baristaName === baristaName && obj.shift === shift) {
                return `${baristaName} has prepared a ${coffeeType} for you!`
            }
        }

        return `${baristaName} is not available to prepare a ${coffeeType}.`;
    }

    function changeShift (baristaName, newShift) {

        for (const obj of arrayWithObjBaristas){
            if (obj.baristaName === baristaName) {
                obj.shift = newShift;
                return  `${baristaName} has updated his shift to: ${newShift}`
            }
        }

        return 'Barista is not valid!';
    }

    function learn (baristaName, newCoffeeType) {
        for (const obj of arrayWithObjBaristas) {
            if (obj.baristaName === baristaName) {
                const knowsHotToMakeNewCoffeeType = obj.coffeeTypes.some(type => type === newCoffeeType);

                if (!knowsHotToMakeNewCoffeeType) {
                    obj.coffeeTypes.push(newCoffeeType)
                    return `${baristaName} has learned a new coffee type: ${newCoffeeType}.`
                }

                return `${baristaName} knows how to make ${newCoffeeType}.`
            }
        }

        return 'Barista is not valid!';
    }

    const allBarista = arrayWithObjBaristas.reduce((arr, obj) => {
        const result = `Barista: ${obj.baristaName}, Shift: ${obj.shift}, Drinks: ${obj.coffeeTypes.join(', ')}`;
        arr.push(result);
        return arr;
    }, [])

    return allBarista.join('\n')

}

console.log(cafeteria([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']));
