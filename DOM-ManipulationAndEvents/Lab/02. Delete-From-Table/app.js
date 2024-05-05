function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('tbody tr'));
    const inputText = document.querySelector('input[name=email]');
    const result = document.getElementById('result');

    for (const td of emails) {
        const email = td.children[1].textContent;
        if (email === inputText.value) {
            td.remove();
            result.textContent = 'Deleted.';
            inputText.value = '';
            return;
        }
    }
    result.textContent = 'Not found.'

}