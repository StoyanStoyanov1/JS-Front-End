function colorize() {
    const rows = document.getElementsByTagName('tr');

    for (let i = 1; i < rows.length ; i++) {
        if (i % 2 === 0) {
            rows[i - 1].style.background = 'teal'
        }
    }
}