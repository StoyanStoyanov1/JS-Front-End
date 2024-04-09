function solve() {
    const expense = document.getElementById('expense');
    const amount = document.getElementById('amount');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');

    const deleteBtn = document.querySelector('.delete');

    addBtn.addEventListener("click", addToPreview);
    deleteBtn.addEventListener('click', () => {
        expensesList.innerHTML = '';
        previewList.innerHTML = '';
        expense.value = '';
        amount.value = '';
        date.value = '';
    }
    );
    function addToPreview () {
        if (!expense.value || !amount.value || !date.value) {
            return
        }
        const givenExpense = expense.value;
        const givenAmount = amount.value;
        const givenDate = date.value;

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.innerHTML = `
        <article>
            <p>Type: ${givenExpense}</p>
            <p>Amount: ${givenAmount}$</p>
            <p>Date: ${givenDate}</p>
        </article>
        <div class="buttons">
            <button class="btn edit">edit</button>
            <button class="btn ok">ok</button>
        </div>
        `;

        const [editBtn, okBtn] = liElement.querySelectorAll('.buttons button');


        editBtn.addEventListener('click', () => {
            expense.value =givenExpense;
            amount.value = givenAmount;
            date.value = givenDate;
            previewList.removeChild(liElement);
            addBtn.disabled = false;
        })

        okBtn.addEventListener('click', () => {
            previewList.removeChild(liElement);
            const divButtons = liElement.querySelector('.buttons');
            liElement.removeChild(divButtons);
            expensesList.appendChild(liElement)
            addBtn.disabled = false;

        })
        previewList.appendChild(liElement);
        addBtn.disabled = true;

        expense.value = '';
        amount.value = '';
        date.value = '';


    }
}

window.addEventListener("load", solve);


