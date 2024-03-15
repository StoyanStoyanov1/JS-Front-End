function solve() {
    function conventionText(startIndex, arrText) {
        const result = [];
        if (startIndex !== 0) {
            result.push(arrText[0])
        }
        for (let i = startIndex; i < arrText.length; i++) {
            const currentText = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
            result.push(currentText);
        }

        return result.join('');
    }

    const text = document.getElementById('text').value.toLowerCase();
    const namingConvention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    if (namingConvention === 'Camel Case' || namingConvention === 'Pascal Case') {
        const startIndex = namingConvention === 'Camel Case' ? 1 : 0
        result.textContent = conventionText(startIndex, text.split(' '))
    } else {
        result.textContent = 'Error!'
    }

}