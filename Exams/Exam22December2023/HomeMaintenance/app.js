function solve() {
    const [placeInput, actionInput, personInput, addTaskBtn] = document.querySelectorAll("#add-task form input");
    addTaskBtn.addEventListener('click', addTasks);

    const taskList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');

    function addTasks() {
        const placeValue = placeInput.value;
        const actionValue = actionInput.value;
        const personValue = personInput.value;
        if (!personValue || !placeValue  || !actionValue) {
            return
        }

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');

        liElement.innerHTML = `
        <article>
            <p>Place:${placeValue}</p>
            <p>Action:${actionValue}</p>
            <p>Person:${personValue}</p>
        </article>
        <div class="buttons">
            <button class="edit">Edit</button>
            <button class="done">Done</button>
        </div>
        `;

        const [editBtn, doneBtn] = liElement.querySelectorAll('.buttons button');

        editBtn.addEventListener('click', (e) => {
            const currentLiElement = e.target.parentElement.parentElement;

            const [placeP, actionP, personP] = currentLiElement.querySelectorAll('p');

            placeInput.value = placeP.textContent.replace('Place:', '');
            actionInput.value = actionP.textContent.replace('Action:', '');
            personInput.value = personP.textContent.replace('Person:', '');


            taskList.removeChild(currentLiElement)
        });

        doneBtn.addEventListener('click', (e) => {
            const currentLiElement = e.currentTarget.parentElement.parentElement;
            currentLiElement.removeChild(currentLiElement.querySelector('.buttons'));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => {
                doneList.removeChild(currentLiElement);
            });

            currentLiElement.appendChild(deleteBtn);
            doneList.appendChild(currentLiElement);
        });


        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';

        taskList.appendChild(liElement);
    }
}

window.addEventListener("load", solve);

