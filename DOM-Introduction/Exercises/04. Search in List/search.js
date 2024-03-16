function search() {
    const towns = Array.from(document.getElementsByTagName("li"));
    const currentInput = document.getElementById('searchText');
    const result = document.getElementById('result')
    let matches = 0;

    for (const town of towns) {
        if (town.textContent.includes(currentInput.value)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matches += 1
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
        }
    }

    currentInput.value = ''

    result.textContent = `${matches} matches found`
}
