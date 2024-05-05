function extract(content) {
    const text = document.getElementById(content).textContent
    const pattern = /\((.*?)\)/g;

    let match = text.match(pattern);

    console.log(match.join('; '))
    return match.join('; ')
}