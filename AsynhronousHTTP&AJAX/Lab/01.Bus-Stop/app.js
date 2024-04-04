function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';

    const ulBusses = document.getElementById('buses');
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');

    ulBusses.innerText = '';
    fetch(baseUrl + stopId.value)
        .then(response => response.json())
        .then(data => {
            stopName.textContent = data.name;
            Object.entries(data.buses).forEach(([busId, time]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                ulBusses.appendChild(li);
            })
        })
        .catch(error => {
            console.error(error);
            stopName.textContent = 'Error';
            ulBusses.innerText = '';
        })

}