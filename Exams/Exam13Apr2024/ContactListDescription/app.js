window.addEventListener("load", solve);

function solve() {
    const name = document.getElementById('name');
    const phoneNumber = document.getElementById('phone');
    const category = document.getElementById('category');

    const addBtn = document.getElementById('add-btn');

    const checkList = document.getElementById('check-list');
    const contactList = document.getElementById('contact-list');

    addBtn.addEventListener('click', addContact);
    function addContact () {
      const currentName = name.value;
      const currentPhone = phoneNumber.value;
      const currentCategory = category.value;

      const liElement = document.createElement('li');
      liElement.innerHTML = `
      <article>
        <p>name:${currentName}</p>
        <p>phone:${currentPhone}</p>
        <p>category:${currentCategory}</p>
      </article>
      <div class="buttons">
            <button class="edit-btn"></button>
            <button class="save-btn"></button>
      </div>
      
      `;

      const editBtn = liElement.querySelector('.edit-btn');
      const saveBtn = liElement.querySelector('.save-btn');

      editBtn.addEventListener('click', () => {
        checkList.removeChild(liElement);
        restInput(currentName, currentPhone, currentCategory);
      });

      saveBtn.addEventListener('click', () => {
        const buttons = liElement.querySelector('.buttons');
        buttons.innerHTML = '';
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('del-btn');
        deleteBtn.addEventListener('click', () => contactList.removeChild(liElement));
        liElement.appendChild(deleteBtn);

        checkList.removeChild(liElement);
        contactList.appendChild(liElement);
      })

      checkList.appendChild(liElement);

      restInput();
    }
    function restInput (currentName = '', currentNumber = '', currentCategory = '') {
      name.value = currentName;
      phoneNumber.value = currentNumber;
      category.value = currentCategory;
    }
  }
  