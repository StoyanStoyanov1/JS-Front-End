function attachGradientEvents() {
    const hoverHere = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    hoverHere.addEventListener('mousemove', gradientMove);
    hoverHere.addEventListener('mouseout', gradientOut);

    function gradientMove (e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        resultElement.textContent = power + '%';
    }

    function gradientOut() {
        resultElement.textContent = '';
    }
}