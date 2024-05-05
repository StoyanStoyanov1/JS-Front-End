function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', onChange)

    function onChange (e) {
        const element = e.currentTarget;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (!pattern.test(element.value)) {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    }
}