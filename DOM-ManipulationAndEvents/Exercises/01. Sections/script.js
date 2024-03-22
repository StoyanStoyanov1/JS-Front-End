function create(words) {
    const content = document.getElementById('content');

    for (const word of words) {
       const div = document.createElement('div');
       const paragraph = document.createElement('p');

       paragraph.textContent = word;
       paragraph.style.display = 'none';
       div.appendChild(paragraph);
       content.appendChild(div);

       div.addEventListener('click', () => paragraph.style.display = paragraph.style.display === 'none'? '' : 'none');

    }
}