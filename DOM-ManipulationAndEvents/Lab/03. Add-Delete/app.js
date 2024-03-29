function addItem() {
    const newItemText = document.getElementById('newItemText');
    const items = document.getElementById('items');

    const createElementLi = document.createElement('li');
    const deleteButton = document.createElement('a');
    deleteButton.href= '#'

    deleteButton.addEventListener('click', deleteItem);
    createElementLi.textContent = newItemText.value;
    deleteButton.textContent = '[Delete]';

    createElementLi.appendChild(deleteButton);
    items.appendChild(createElementLi);

    newItemText.value = ''
    function deleteItem (el) {
        const row = el.currentTarget.parentNode;
        row.remove();
    }
}