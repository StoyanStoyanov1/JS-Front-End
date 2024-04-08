const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const nameInput = document.getElementById('name');
const numberOfDaysInput = document.getElementById('num-days');
const fromDateInput = document.getElementById('from-date');

const addVacationBtn = document.getElementById('add-vacation');
const editVacationBtn = document.getElementById('edit-vacation');
const loadVacationBtn = document.getElementById('load-vacations');

const vacationsList = document.getElementById('list');
let vacationId = '';

loadVacationBtn.addEventListener('click', loadVacations);
vacationsList.innerHTML = '';
editVacationBtn.addEventListener('click', (e) => addOrEditVacation(e));
addVacationBtn.addEventListener('click', (e) => addOrEditVacation(e));
function loadVacations() {
	vacationsList.innerHTML = '';
	fetch(baseUrl)
		.then(resp => resp.json())
		.then(vacations => {
			Object.values(vacations).forEach(vacation => createDivContainer(vacation.name, vacation.days, vacation.date, vacation._id))
		})
}

function addOrEditVacation(e) {
	const [name, days, date] = [nameInput.value, numberOfDaysInput.value, fromDateInput.value];
	const inputIsValid = name && days && date;

	if (!inputIsValid) {
		return;
	}

	const body = {name, days, date};

	if (e.target.textContent === 'Add Vacation') {
		fetchRequest('POST', body)
		loadVacations();
	} else {
		body['_id'] = vacationId;
		fetchRequest('PUT', body, vacationId);
		loadVacations();
		addVacationBtn.disabled = false;
		editVacationBtn.disabled = true;
	}

	resetInput();



}
function createDivContainer (name, days, date, id) {
	const divContainer = document.createElement('div');
	divContainer.classList.add('container');
	divContainer.innerHTML = `
	<h2>${name}</h2>
	<h3>${date}</h3>
	<h3>${days}</h3>
	<button class="change-btn">Change</button>
	<button class="done-btn">Done</button>
	`;

	const changeBtn = divContainer.querySelector('.change-btn');
	const doneBtn = divContainer.querySelector('.done-btn');

	changeBtn.addEventListener('click', () => {
		resetInput(name, days, date);
		vacationsList.removeChild(divContainer);
		addVacationBtn.disabled = true;
		editVacationBtn.disabled = false;
		vacationId = id;
	});

	doneBtn.addEventListener('click', () => {
		fetch(baseUrl + id, {
			method: 'DELETE',
		});
		loadVacations();
	});

	vacationsList.appendChild(divContainer)

}
function fetchRequest(method, body, id = '') {
	fetch(baseUrl + id, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
}

function resetInput (name = '', days = '', date = '') {
	nameInput.value = name;
	numberOfDaysInput.value = days;
	fromDateInput.value = date;
}

