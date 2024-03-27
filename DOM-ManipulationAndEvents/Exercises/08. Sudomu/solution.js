function solve() {
    const tbodyTr = document.querySelectorAll('tbody tr');
    const [quickCheckBtn, clearBtn] = document.querySelectorAll('tfoot button');
    quickCheckBtn.addEventListener('click', quickCheck);
    clearBtn.addEventListener('click', clear);

    const checkParagraph = document.querySelector('#check p');
    const table = document.querySelector('table');


    function quickCheck() {
        const matrix = sudokuMatrix();
        let win = true;

        for (let index = 0; index < 3; index++) {
            const rowSet = new Set(matrix[index]);
            const colSet = new Set([matrix[0][index], matrix[1][index], matrix[2][index]]);
            if (rowSet.size !== 3 || colSet.size !== 3) {
                win = false;
                break;
            }
        }

        checkParagraph.textContent = win ? "You solve it! Congratulations!" : "NOP! You are not done yet...";
        table.style.border = win ? '2px solid green' : '2px solid red'
        checkParagraph.style.color = win ? 'green' : 'red'
    }

    function clear() {
        checkParagraph.textContent = '';
        table.style.border = 'none';
        checkParagraph.style.color = 'none';

        for (const tr of tbodyTr) {
            const inputs = tr.querySelectorAll('input');
            for (const input of inputs) {
                input.value = '';
            }
        }

    }

    function sudokuMatrix() {
        const matrix = []
        for (const tr of tbodyTr) {
            const tdElements = tr.querySelectorAll('td');
            const row = [];
            for (const td of tdElements) {
                const inputElement = td.querySelector('input')
                const inputValue = inputElement.value;


                row.push(inputValue);
            }

            matrix.push(row);

        }

        return matrix
    }

}