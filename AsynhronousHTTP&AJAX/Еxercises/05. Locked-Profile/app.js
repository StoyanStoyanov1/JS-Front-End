function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles/'

    const container = document.getElementById('main');

    container.innerHTML = '';

    fetch(baseUrl)
        .then(response => response.json())
        .then(profiles => {
            Object.values(profiles).forEach((profile,index) => {
                const divElement = document.createElement('div');
                divElement.classList.add('profile');
                divElement.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${index + 1}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
                    <hr>
                        <label>Username</label>
                        <input type="text" name="user${index + 1}Username" value="${profile.username}" disabled readOnly />
                        <div class="user${index + 1}Username">
                            <hr>
                                <label>Email:</label>
                                <input type="email" name="user${index + 1}Email" value="${profile.email}" disabled readOnly />
                                <label>Age:</label>
                                <input type="email" name="user${index + 1}Age" value="${profile.age}" disabled readonly />
                        </div>
 
                        <button>Show more</button>`;
                const details = divElement.querySelector(`.user${index + 1}Username`);
                details.style.display = 'none';


                const showMoreBtn = divElement.querySelector('button');
                showMoreBtn.addEventListener('click', () => {
                    const isUnlock = divElement.querySelector('input[type="radio"][value="unlock"]:checked');
                    if (isUnlock) {
                        details.style.display = details.style.display === 'block'? 'none': 'block';
                        showMoreBtn.textContent = showMoreBtn.textContent === 'Show more'? 'Hide it': 'Show more';
                    }
                })
                container.appendChild(divElement);
            })

        })
}