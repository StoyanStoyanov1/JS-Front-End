function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/'

    const info = document.querySelector('#info .info');
    const [departBtn, arriveBtn] = document.querySelectorAll('#controls input');
    let stopId = 'depot';
    let stopName = ''
    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(baseUrl + stopId)
            .then(response => response.json())
            .then(data => {
                stopId = data.next;
                info.textContent = `Next stop ${data.name}`;
                stopName = data.name;
            }).catch(error => {
                console.error(error);
                info.textContent = "Not Connected";
        })

    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        info.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();