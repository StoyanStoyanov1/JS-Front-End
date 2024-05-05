function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const optionElement = document.createElement('option');

    if (newItemValue.value && newItemText.value) {
        optionElement.textContent = newItemText.value;
        optionElement.value = newItemValue.value;
        menu.appendChild(optionElement);
    }

    newItemText.value = '';
    newItemValue.value = ''

}