function radioCrystals(chunks) {
    const targetThickness = chunks[0];

    for (let i = 1; i < chunks.length; i++) {
        let thickness = chunks[i];
        console.log(`Processing chunk ${thickness} microns`);

        thickness = executeOperation(thickness, targetThickness, 'Cut', (thickness) => thickness / 4);
        thickness = executeOperation(thickness, targetThickness, 'Lap', (thickness) => thickness * 0.8);
        thickness = executeOperation(thickness, targetThickness, 'Grind', (thickness) => thickness - 20);
        thickness = executeOperation(thickness, targetThickness, 'Etch', (thickness) => thickness - 2);

        if (thickness + 1 === targetThickness) {
            thickness += 1;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }

    function executeOperation(thickness, targetThickness, operationName, operationFunc) {
        let operationCount = 0;
        while (thickness !== targetThickness && thickness >= targetThickness) {
            let newThickness = operationFunc(thickness);
            if (newThickness < targetThickness && operationName !== 'Etch') break;
            thickness = newThickness;
            operationCount++;
        }
        if (operationCount > 0) {
            console.log(`${operationName} x${operationCount}`);
            console.log('Transporting and washing');
            thickness = Math.floor(thickness);
        }
        return thickness;
    }
}


radioCrystals([1375, 50000])
radioCrystals([1000, 4000, 8100])