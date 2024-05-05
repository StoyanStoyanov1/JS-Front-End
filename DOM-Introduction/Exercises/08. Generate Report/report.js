function generateReport() {
    const checkboxes = Array.from(document.querySelectorAll('tr th input[type="checkbox"]'));
    const checkboxesValues = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output')
    const result = [];

    checkboxesValues.forEach(tr => {
        const tds = Array.from(tr.querySelectorAll('td'));
        const obj = {};

        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                obj[checkbox.name] = tds[index].textContent.trim();
            }
        });

        if (Object.keys(obj).length > 0) {
            result.push(obj);
        }
    });

    output.textContent = JSON.stringify(result, null, 2)
}
