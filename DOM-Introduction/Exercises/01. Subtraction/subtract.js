function subtract() {
    const firstNummer = Number(document.getElementById('firstNumber').value)
    const secondNumber = Number(document.getElementById('secondNumber').value)

    let result = document.getElementById('result')

    result.textContent = firstNummer - secondNumber
}