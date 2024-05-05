const baseUrl = 'http://localhost:3030/jsonstore/games/';
let gameId = '';

const gameName = document.getElementById('g-name');
const gameType = document.getElementById('type');
const maxPlayers = document.getElementById('players');

const loadGamesBtn = document.getElementById('load-games');
const addGameBtn = document.getElementById('add-game');
const editGameBtn = document.getElementById('edit-game');

const gameList = document.getElementById('games-list');
gameList.innerHTML = '';

loadGamesBtn.addEventListener('click', loadGames);
addGameBtn.addEventListener('click', addGame);
editGameBtn.addEventListener('click', editGame);

function addGame () {
	const name = gameName.value;
	const type = gameType.value;
	const players = maxPlayers.value;

	const inputIsTrue = name && type && players;

	if (!inputIsTrue) {
		return;
	}

	fetch(baseUrl, {
		method: "POST",
		headers: {
			"Content-Type": 'application/json',
		},
		body: JSON.stringify({name, type, players}),
	}).then(loadGames)

	restInput();
}
function loadGames() {
	gameList.innerHTML = '';
	fetch(baseUrl)
		.then(response => response.json())
		.then(games => {
			Object.values(games).forEach(game => {
				createBoardGame(game.name, game.type, game.players, game._id);

			})
		})
}

function editGame () {
	const name = gameName.value;
	const type = gameType.value;
	const players = maxPlayers.value;

	const inputIsTrue = name && type && players;

	if (!inputIsTrue) {
		return;
	}

	fetch(baseUrl + gameId, {
		method: 'PUT',
		body: JSON.stringify({
			name,
			type,
			players,
			_id: gameId,
		})
	});

	loadGames();
	restInput();

	addGameBtn.disabled = false;
	editGameBtn.disabled = true;
}
function createBoardGame(name, type, players, id) {
	const boardGame = document.createElement('div');
	boardGame.classList.add('board-game');
	boardGame.innerHTML = `
				<div class="content">
					<p>${name}</p>
					<p>${type}</p>
					<p>${players}</p>
				</div>
				`;

	const buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons-container');

	const changeBtn = document.createElement('button');
	changeBtn.classList.add('change-btn');
	changeBtn.textContent = 'Change';
	changeBtn.addEventListener('click', () => {
		restInput(name, type, players);
		gameList.removeChild(boardGame);
		addGameBtn.disabled = true;
		editGameBtn.disabled = false;
		gameId = id;
	});
	buttonsContainer.appendChild(changeBtn);


	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');
	deleteBtn.textContent = 'Delete'
	deleteBtn.addEventListener('click', () => {
		gameList.removeChild(boardGame);
		fetch(baseUrl + id, {
			method: 'DELETE',
		})

	})

	buttonsContainer.appendChild(deleteBtn);
	boardGame.appendChild(buttonsContainer);
	gameList.appendChild(boardGame)
}

function restInput(name = '', type = '', players = '') {
	gameName.value = name;
	gameType.value = type;
	maxPlayers.value = players;
}