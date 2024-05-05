window.addEventListener("load", solve);

function solve() {
    const [playerName, score, round] = document.querySelectorAll('.scoring-content input');
    const addBtn = document.getElementById('add-btn');
    const sureList = document.getElementById('sure-list');
    const scoreBoardUl = document.getElementById('scoreboard-list');
    addBtn.addEventListener('click', addToSureList);

    const btnClear = document.querySelector('.clear');
    btnClear.addEventListener('click', solve)

    sureList.innerHTML = '';
    scoreBoardUl.innerHTML = '';
    refreshInput();


    function  addToSureList() {
        if (!inputIsCorrect()) {
          return
        }
        sureList.innerHTML = '';
        sureList.appendChild( createLiElement(playerName.value, score.value, round.value));

        refreshInput();
        addBtn.disabled = true;
    }

    function refreshInput(givenName='', givenScore = '', givenRound='') {
      playerName.value = givenName;
      score.value = givenScore;
      round.value = givenRound;
    }

    function inputIsCorrect () {
      return playerName.value && score.value && round.value;
    }

    function createLiElement(name, score, round) {
      const liElement = document.createElement('li');
      liElement.classList.add('dart-item');
      liElement.innerHTML = liInnerHTML(name, score, round);

      const editBtn = document.createElement('button');
      editBtn.classList.add('btn', 'edit');
      editBtn.textContent = 'edit';

      const okBtn = document.createElement('button');
      okBtn.classList.add('btn', 'ok');
      okBtn.textContent = 'ok';


      editBtn.addEventListener('click', () => {
        refreshInput(name, score, round);
        sureList.innerHTML = '';
        addBtn.disabled = false;
      });

      okBtn.addEventListener('click', () => {
          liElement.innerHTML = liInnerHTML(name, score, round);
          sureList.innerHTML = '';
          scoreBoardUl.appendChild(liElement);
          addBtn.disabled = false;

      })

      liElement.appendChild(editBtn);
      liElement.appendChild(okBtn);
      return liElement;
    }

    function liInnerHTML (name, score, round) {
      return `
      <article>
        <p>${name}</p>
        <p>Score: ${score}</p>
        <p>Round: ${round}</p>
      </article>
       `;
    }
  }
  