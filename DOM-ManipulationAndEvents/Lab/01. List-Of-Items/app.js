function addItem() {
    const listOfItems = document.getElementById('items');
    const newItemText = document.getElementById('newItemText');
    const newElement = document.createElement('li');

    newElement.textContent = newItemText.value;
    listOfItems.appendChild(newElement);

    newItemText.value = ''
}