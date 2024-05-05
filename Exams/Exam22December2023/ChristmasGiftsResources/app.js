function solve() {


    const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

    const presentInput = document.getElementById('gift');
    const forInput = document.getElementById('for');
    const priceInput = document.getElementById('price');

    const addPresentBtn = document.getElementById('add-present');
    const editPresentBtn = document.getElementById('edit-present');
    const loadPresentsBtn = document.getElementById('load-presents');

    const giftList = document.getElementById('gift-list');
    giftList.innerHTML = '';

    addPresentBtn.addEventListener('click', addPresent);
    editPresentBtn.addEventListener('click', editPresent)
    loadPresentsBtn.addEventListener('click', loadPresents)

    let editObj;

    function postBody(presentValue, forValue, priceValue) {
         return JSON.stringify({
            gift: presentValue,
            for: forValue,
            price: priceValue,
        })
    }

    function addPresent() {

        const presentValue = presentInput.value;
        const forValue = forInput.value;
        const priceValue = priceInput.value;

        if (!presentValue || !forValue || !priceValue) {
            return
        }


        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: postBody(presentValue, forValue, priceValue),
        })

        presentInput.value = '';
        forInput.value = '';
        priceInput.value = '';
    }


    function editPresent() {
        addPresentBtn.disabled = false;
        editPresentBtn.disabled = true;

        putRequest(editObj._id, presentInput.value, forInput.value, priceInput.value);
        editObj.gift = presentInput.value;
        loadPresents()
        presentInput.value = '';
        forInput.value = '';
        priceInput.value = '';
    }

    function putRequest(id, newPresent, forValue, price) {
        fetch(baseUrl + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gift: newPresent,
                for: forValue,
                price: price,
                _id: id,
            })
        })
    }



    async function loadPresents() {
        const response = await fetch(baseUrl);
        const giftsInfo = await response.json();
        giftList.innerHTML = '';

        Object.values(giftsInfo).forEach(data => {
            const giftSock = document.createElement('div');
            giftSock.classList.add('gift-sock');
            console.log(data._id)
            giftSock.innerHTML = `
            <div class="content">
                <p>${data.gift}</p>
                <p>${data.for}</p>
                <p>${data.price}</p>
            </div>
            <div class="buttons-container"> 
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;


            const changeBtn = giftSock.querySelector('.change-btn');
            changeBtn.addEventListener('click', () => {

                giftList.removeChild(giftSock);
                addPresentBtn.disabled = true;
                editPresentBtn.disabled = false;
                editObj = data;
                presentInput.value = data.gift;
                forInput.value = data.for;
                priceInput.value = data.price;

            })

            const deleteBtn = giftSock.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                fetch(baseUrl + data._id, {
                    method: 'DELETE',
                });
                giftList.removeChild(giftSock)
            });


            giftList.appendChild(giftSock)
        })


    }
}

solve()