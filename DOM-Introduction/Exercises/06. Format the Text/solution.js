function solve() {
  const inputText = document.getElementById('input').value.split('.');
  const filteredInputText = inputText
      .filter(el => el.length > 0)
      .map(el => el += '.');
  const output = document.getElementById('output');
  output.textContent = ''
  while (filteredInputText.length > 0) {
      let p = document.createElement('p');
      p.textContent = filteredInputText.splice(0, 3).join('');
      output.appendChild(p);
  }
}