function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/';
    const section = document.getElementById('main');

    fetch(baseUrl + 'list')
        .then(response => response.json())
        .then(data => {
                Object.values(data).forEach(info => {
                    const details = []

                    fetch(baseUrl + `details/${info._id}`)
                        .then(response => response.json())
                        .then(detail => {
                            section.appendChild(createAccordion(detail))
                            }
                        )
                })
            }
        )


    function createAccordion(detail) {
        const divAccordion = document.createElement('div');
        divAccordion.classList.add('accordion');

        divAccordion.innerHTML = `<div class="head">
                <span>${detail.title}</span>
                <button class="button" id="${detail._id}">More</button>
            </div>
            <div class="extra">
                <p>${detail.content}</p>
            </div>`;

        const moreBtn = divAccordion.querySelector('button');
        moreBtn.addEventListener('click', () => {
            const divExtra = divAccordion.querySelector('.extra')
            divExtra.style.display = divExtra.style.display === 'none'? 'block': 'none';
            moreBtn.textContent = divExtra.style.display === 'none'? 'More': 'Less';
        })
        return divAccordion
    }
}

solution()