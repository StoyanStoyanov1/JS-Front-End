function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';

    const inputLocation = document.getElementById('location');
    const getWeather = document.getElementById('submit');
    getWeather.addEventListener('click', findLocation);

    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');


    async function findLocation() {
        await locationToday();
        await locationUpcoming()
    }
    async function locationToday() {
        current.innerHTML = '';
        try {
            const code = await findCode();
            const response = await fetch(baseUrl + `today/${code}`);
            const data = await response.json();

            const divForecasts = document.createElement('div');
            divForecasts.classList.add('forecasts');

            divForecasts.innerHTML = `
                <span class="condition symbol">${symbols(data.forecast.condition)}</span>
                <span class="condition">
                    <span class="forecast-data">${data.name}</span>
                    <span class="forecast-data">${data.forecast.low + symbols('Degrees')}/${data.forecast.high + symbols('Degrees')}</span>
                    <span class="forecast-data">${data.forecast.condition}</span>
                </span>              
           `;

            current.appendChild(divForecasts)
            document.getElementById('forecast').style.display = 'block'



        } catch (error) {
            console.error(error);
        }
    }

    async function locationUpcoming () {
        try {
            const code = await findCode();
            const response = await fetch(baseUrl + `upcoming/${code}`);
            const data = await response.json();

            console.dir(data)
            const forecastInfo = document.createElement('div');
            forecastInfo.classList.add('forecast-info');

            data.forecast.forEach(info => {
                const spanUpcoming = document.createElement('span');
                spanUpcoming.classList.add('upcoming');
                spanUpcoming.innerHTML = `
                <span class="symbol">${symbols(info.condition)}</span>
                <span class="forecast-data">${info.low + symbols('Degrees')}/${info.high + symbols('Degrees')}</span>
                <span class="forecast-data">${info.condition}</span>
                
                `
                forecastInfo.appendChild(spanUpcoming)
            })

            upcoming.appendChild(forecastInfo)

        } catch (error) {
            console.error(error)
        }
    }
    async function findCode() {

        const response = await fetch(`${baseUrl}locations`);
        const locations = await response.json();

        for (const location of locations) {
            if (location.name === inputLocation.value) {
                return location.code;
            }
        }
    }

    function symbols (symbol) {
        const possibleSymbols = {
            'Sunny': '&#x2600',
            'Partly sunny': '&#x26C5',
            'Overcast': '&#x2601',
            'Rain': '&#x2614',
            'Degrees': '&#176'
        };

        return possibleSymbols[symbol];
    }
}

attachEvents();