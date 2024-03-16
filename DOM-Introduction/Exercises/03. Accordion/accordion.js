function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extra = document.getElementById('extra');

    button.textContent = button.textContent === 'More' ? 'Less': 'More';
    extra.style.display = button.textContent === 'More'? 'none': 'block' ;
}