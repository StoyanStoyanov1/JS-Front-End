function solve() {
    const [inputArea, outputArea] = document.querySelectorAll('#exercise textarea');
    const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');

    const table = document.querySelector('.table tbody');

    generateBtn.addEventListener('click', generate)
    buyBtn.addEventListener('click', buyCalc)

    function generate() {
        const objItems = JSON.parse(inputArea.value);

        for (const item of Array.from(objItems)) {
            const itemValues = Object.values(item);
            table.appendChild(createNewTrElement(...itemValues))
        }
    }

    function buyCalc() {
        const items = table.querySelectorAll('tr');
        const names = [];
        const prices = [];
        const factors = [];

        for (const item of Array.from(items)) {
            const tdElements = Array.from(item.querySelectorAll('td'));
            const name = tdElements[1].textContent;
            const price = Number(tdElements[2].textContent);
            const decorationFactor = Number(tdElements[3].textContent);
            const markIsChecked = item.querySelector('input[type=checkbox]').checked;
            if (markIsChecked) {
                names.push(name);
                prices.push(price);
                factors.push(decorationFactor);
            }
        }


        const totalPrice = prices.reduce((sum, price) => sum + price, 0);
        const averageFactor = (factors.reduce((sum, factor) => sum + factor, 0)) / factors.length;

        outputArea.value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`
    }

    function createNewTrElement(name, img, price, decorationFactor) {
        const newTrElement = document.createElement('tr');
        newTrElement.appendChild(createImageElement(img));
        newTrElement.appendChild(createParagraphElement(name));
        newTrElement.appendChild(createParagraphElement(price));
        newTrElement.appendChild(createParagraphElement(decorationFactor));
        newTrElement.appendChild(createInputElement())

        return newTrElement
    }

    function createImageElement(img) {
        const newTdElement = document.createElement('td');

        const newImageElement = document.createElement('img');
        newImageElement.src = img;

        newTdElement.appendChild(newImageElement);

        return newTdElement;
    }

    function createParagraphElement(text) {
        const newTdElement = document.createElement('td');

        const paragraph = document.createElement('p');
        paragraph.textContent = text

        newTdElement.appendChild(paragraph);

        return newTdElement;
    }

    function createInputElement() {
        const newTdElement = document.createElement('td');

        const inputElement = document.createElement('input');
        inputElement.type = 'checkbox';

        newTdElement.appendChild(inputElement);
        return newTdElement;
    }
}