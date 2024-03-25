function encodeAndDecodeMessages() {
    const inputTextArea = document.querySelector('#main div textarea:not(:disabled)');
    const inputTextAreaBtn = inputTextArea.nextElementSibling;

    const outputTextArea = document.querySelector('#main div textarea:disabled');
    const outputTextAreaBtn = outputTextArea.nextElementSibling;


    inputTextAreaBtn.addEventListener('click', encodeAndSendIt);

    outputTextAreaBtn.addEventListener('click', decodeAndDisplayIt);

    function encodeAndSendIt() {
        const text = inputTextArea.value;
        inputTextArea.value = '';
        let newText = '';

        for (let i = 0; i < text.length; i++) {
            newText += String.fromCharCode(text.charCodeAt(i) + 1);
        }

        outputTextArea.textContent = newText;
    }

    function decodeAndDisplayIt() {

        const text = outputTextArea.textContent;
        let newText = '';

        for (let i = 0; i < text.length; i++) {
            newText += String.fromCharCode(text.charCodeAt(i) - 1);
        }

        outputTextArea.textContent = newText;

    }
}