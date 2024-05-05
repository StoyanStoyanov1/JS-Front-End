function sumTable() {
    const table = document.querySelector('table tbody');
    const rows = table.getElementsByTagName('tr');
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const cost = parseFloat(rows[i].getElementsByTagName('td')[1].textContent);
        sum += cost
    }

    document.getElementById('sum').textContent = sum.toFixed(2)

}