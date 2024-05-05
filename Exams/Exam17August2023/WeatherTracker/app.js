const baseUrl = 'http://localhost:3030/jsonstore/tasks/'
let weatherId;

const locationInput = document.getElementById('location');
const temperatureInput = document.getElementById('temperature');
const dateInput = document.getElementById('date');

const addWeatherBtn = document.getElementById('add-weather');
const editWeatherBtn = document.getElementById('edit-weather');
const loadHistoryBtn = document.getElementById('load-history');

const listWeather = document.getElementById('list');
listWeather.innerHTML = '';

loadHistoryBtn.addEventListener('click', loadHistory);
addWeatherBtn.addEventListener('click', (e) => addWeather(e))
editWeatherBtn.addEventListener('click', (e) => addWeather(e))

function loadHistory() {
    listWeather.innerHTML = '';
    fetch(baseUrl)
        .then(response => response.json())
        .then(weathers => {
            Object.values(weathers)
                .forEach(weather => {
                    listWeather.appendChild(createDivContainer(weather.location, weather.temperature, weather.date, weather._id));
                });
        })
}

function createDivContainer (location, temperature, date, id) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    divContainer.innerHTML = `
    <h2>${location}<h2>
    <h3>${date}<h3>
    <h3 id="celsius">${temperature}<h3>
    <div class="buttons-container">
        <button class="change-btn">Change</button>
        <button class="delete-btn">Delete</button>
    </div>
    `;

    const changeBtn = divContainer.querySelector('.change-btn');
    const deleteBtn = divContainer.querySelector('.delete-btn');

    changeBtn.addEventListener('click', () => {
        weatherId = id;
        addWeatherBtn.disabled = true;
        editWeatherBtn.disabled = false;
        resetInput(location, temperature, date);
        listWeather.removeChild(divContainer);
    });

    deleteBtn.addEventListener('click', () => {
        fetch(baseUrl + id, {
            method: 'DELETE'
        });
        listWeather.removeChild(divContainer);
    });



    return divContainer
}

function resetInput (location = '', temperature = '', date= ''){
    locationInput.value = location;
    temperatureInput.value = temperature;
    dateInput.value = date;
}

function addWeather(e) {
    const locationValue = locationInput.value;
    const temperatureValue = temperatureInput.value;
    const dateValue = dateInput.value;

    if(!locationValue || !temperatureValue || !dateValue) {
        return;
    }

    if (e.currentTarget.textContent === 'Add Weather') {
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'location': locationValue,
            'temperature': temperatureValue,
            'date': dateValue,
        })
    });
    } else {
        fetch(baseUrl + weatherId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'location': locationValue,
                'temperature': temperatureValue,
                'date': dateValue,
                '_id': weatherId,
            })
        });
        addWeatherBtn.disabled = false;
        editWeatherBtn.disabled = true;
    }
    resetInput();
    loadHistory();

}

