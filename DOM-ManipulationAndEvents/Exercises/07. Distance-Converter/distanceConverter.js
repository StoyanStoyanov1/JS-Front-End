function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');

    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    function convert() {
        const numberInputDistance = Number(inputDistance.value);

        const valueInputUnits = inputUnits.value;
        const valueOutputUnits = outputUnits.value;

        const meter = convertDistance(valueInputUnits, numberInputDistance, true);
        outputDistance.value = convertDistance(valueOutputUnits, meter, false)
        console.log(meter)
    }

    function convertDistance(type, value, inputUnit) {
        let result;
        switch (type) {
            case 'km':
                inputUnit ? result = value * 1000 : result = value / 1000;
                break;
            case 'm':
                result = value;
                break;
            case 'cm':
                inputUnit ? result = value * 0.01 : result = value / 0.01;
                break;
            case 'mm':
                inputUnit ? result = value * 0.001 : result = value / 0.001;
                break;
            case 'mi':
                inputUnit ? result = value * 1609.34 : result = value / 1609.34;
                break;
            case 'yrd':
                inputUnit ? result = value * 0.9144 : result = value / 0.9144;
                break;
            case 'ft':
                inputUnit ? result = value * 0.3048 : result = value / 0.3048;
                break;
            case 'in':
                inputUnit ? result = value * 0.0254 : result = value / 0.0254;
                break;
        }

        return result;
    }

}