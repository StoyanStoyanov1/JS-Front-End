window.addEventListener("load", solve);

function solve() {
	const taskTitle = document.getElementById('task-title');
	const taskCategory = document.getElementById('task-category');
	const taskContent = document.getElementById('task-content');

	const publishBtn = document.getElementById('publish-btn');

	const reviewList = document.getElementById('review-list');
	const publishedList = document.getElementById('published-list');

	publishBtn.addEventListener("click", publish);
	function publish() {
		const title = taskTitle.value;
		const category = taskCategory.value;
		const content = taskContent.value;

		const correctInput = title && category && content;
		if (!correctInput) {
			return;
		}

		createLiElement(title, category, content);
		restartInput()

	}

	function restartInput (title = '', category = '', content = '') {
		taskTitle.value = title;
		taskCategory.value = category;
		taskContent.value = content;
	}

	function createLiElement (title, category, content) {
		const liElement = document.createElement('li');
		liElement.classList.add('rpost');

		liElement.innerHTML = `
		<article>
			<h4>${title}</h4>
			<p>Category: ${category}</p>
			<p>Content: ${content}</p>
		</article>
		`;

		const editBtn = document.createElement('button');
		editBtn.classList.add('action-btn', 'edit');
		editBtn.addEventListener('click', () => {
			reviewList.removeChild(liElement);
			restartInput(title, category, content);
		});
		editBtn.textContent = 'Edit';

		const postBtn = document.createElement('button');
		postBtn.classList.add('action-btn', 'post');
		postBtn.addEventListener('click', () => {
			reviewList.removeChild(liElement);
			liElement.removeChild(editBtn);
			liElement.removeChild(postBtn);
			publishedList.appendChild(liElement);
		});
		postBtn.textContent = 'Post';

		liElement.appendChild(editBtn);
		liElement.appendChild(postBtn);
		reviewList.appendChild(liElement);
	}

}