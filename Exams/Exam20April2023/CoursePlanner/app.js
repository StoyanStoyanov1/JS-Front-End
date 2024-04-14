const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
let taskId = '';

const courseTitle = document.getElementById('course-name');
const courseType = document.getElementById('course-type');
const courseDescription = document.getElementById('description');
const teachersName = document.getElementById('teacher-name');
const addCourseBtn = document.getElementById('add-course');
const editBtn = document.getElementById('edit-course');

const loadCoursesBtn = document.getElementById('load-course');

const listCourses = document.getElementById('list');

loadCoursesBtn.addEventListener('click', loadCourses);
addCourseBtn.addEventListener("click", (e) => addOrEditCourse(e));
editBtn.addEventListener("click", (e) => addOrEditCourse(e));

function addOrEditCourse (e) {
	const title = courseTitle.value;
	const type = courseType.value;
	const description = courseDescription.value;
	const teacher = teachersName.value;

	const correctInput =  title && type && description && teacher;

	if (!correctInput) {
		return;
	}

	const currentMethod = e.target.textContent === 'Add Course' ? 'POST' : 'PUT';

	if (currentMethod === 'POST') {
		const body = {
			title: title,
			type: type,
			description: description,
			teacher: teacher,
		};

		request(currentMethod, JSON.stringify(body));
	} else {
		const body = {
			title: title,
			type: type,
			description: description,
			teacher: teacher,
			_id: taskId,
		};

		request(currentMethod, JSON.stringify(body), taskId);
	}

	restartInput();
	loadCourses();
	addCourseBtn.disabled = false;
	editBtn.disabled = true;

}
function loadCourses () {
	listCourses.innerHTML = '';
	fetch(baseUrl)
		.then(response => response.json())
		.then(courses => {
			Object.values(courses)
				.forEach(course => {
					createDivContainer(course.title, course.type, course.description, course.teacher, course._id);
				})
		})
}
function createDivContainer(title, type, description, teacher, id = '') {
	const div = document.createElement('div');
	div.classList.add('container');
	div.innerHTML = `
	<h2>${title}</h2>
	<h3>${teacher}</h3>
	<h3>${type}</h3>
	<h4>${description}</h4>
	`;

	const editCourseBtn = document.createElement('button');
	editCourseBtn.classList.add('edit-btn');
	editCourseBtn.textContent = 'Edit Course';
	editCourseBtn.addEventListener("click", () => {
		restartInput(title, type, description, teacher);
		taskId = id;
		addCourseBtn.disabled = true;
		editBtn.disabled = false;
		listCourses.removeChild(div);
	});

	const finishBtn = document.createElement('button');
	finishBtn.classList.add('finish-btn');
	finishBtn.textContent = 'Finish Course';
	finishBtn.addEventListener('click', () => {
		listCourses.removeChild(div);
		fetch(baseUrl + id, {
			method: 'DELETE',
		});
	})

	div.appendChild(editCourseBtn);
	div.appendChild(finishBtn);

	listCourses.appendChild(div);

}

function restartInput(title = '', type = '', description = '', teacher = '') {
	courseTitle.value = title;
	courseType.value = type;
	courseDescription.value = description;
	teachersName.value = teacher;
}

function request(method, body, id = '') {
	const url = id ? baseUrl + id : baseUrl
	fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body
	})
}