function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook/';

    const phoneBook = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', getAllPhones);
    createBtn.addEventListener('click', createContact);

    async function getAllPhones() {
        const AllPhones = await ((await fetch(baseUrl)).json());
        phoneBook.innerHTML = '';

        Object.values(AllPhones).forEach(contact => {
            const li = document.createElement('li');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.textContent = `${contact.person}: ${contact.phone}`
            li.appendChild(deleteBtn);

            phoneBook.appendChild(li)

            deleteBtn.addEventListener('click', deleteContact);

            function deleteContact() {
                const id = contact._id;

                fetch(baseUrl + id, {
                    method: 'Delete',
                });

                li.remove();
            }
        });

    }

    function createContact() {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(
                {
                    person,
                    phone
                }
            )
        }).then(response => response.json())
            .then(() => {
                getAllPhones();
                document.getElementById('person').value = '';
                document.getElementById('phone').value = '';
            })

    }

}

attachEvents();