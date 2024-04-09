const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
let mealId = '';

const foodEl = document.getElementById('food');
const timeEL = document.getElementById('time');
const caloriesEl = document.getElementById('calories');

const [addMealBtn, editMealBtn] = document.querySelectorAll('#form-buttons button');
const loadMealsBtn = document.getElementById('load-meals');

const mealList = document.getElementById('list');
mealList.innerHTML = '';

const validInput = () => foodEl.value && timeEL.value && caloriesEl.value;


loadMealsBtn.addEventListener('click', loadMeals);
addMealBtn.addEventListener('click', addMeal);
editMealBtn.addEventListener('click', () => editMeal(mealId));

function loadMeals() {
    mealList.innerHTML = '';
    fetch(baseUrl)
        .then(response => response.json())
        .then(meals => {
            Object.values(meals)
                .forEach(male => createDivMeal(male.food, male.time, male.calories, male._id))
        })
}

function createDivMeal(food, time, calories, id) {
    const divMeal = document.createElement('div');
    divMeal.classList.add('meal');

    divMeal.innerHTML = `
    <h2>${food}</h2>
    <h3>${time}</h3>
    <h3>${calories}</h3>
    <div id="meal-buttons">
        <button class="change-meal">Change</button>
        <button class="delete-meal">Delete</button>
    </div>
    
    `;

    const [changeBtn, deleteBtn] = divMeal.querySelectorAll('#meal-buttons button');
    changeBtn.addEventListener('click', () => {
        resetInput(food, time, calories);
        mealList.removeChild(divMeal);
        addMealBtn.disabled = true;
        editMealBtn.disabled = false;
        mealId = id;
    });

    deleteBtn.addEventListener('click',
        () => {
            fetch(baseUrl + id,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }


                })
            mealList.removeChild(divMeal)
        }
    )

    mealList.appendChild(divMeal)
}

function addMeal() {

    if (!validInput()) {
        return;
    }

    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: bodyPost(foodEl.value, timeEL.value, caloriesEl.value),
    })

    resetInput()
    loadMeals()
}

function bodyPost(food, time, calories, id = '') {
    const meal = {food, time, calories};
    if (id) {
        meal['_id'] = id;
    }
    return JSON.stringify(meal);
}

function editMeal(id) {
    fetch(baseUrl + id, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json",
        },
        body: bodyPost(foodEl.value, timeEL.value, caloriesEl.value, id),
    });

    editMealBtn.disabled = true;
    addMealBtn.disabled = false;
    resetInput();
    loadMeals()
}

function resetInput(food = '', time = '', calories = '') {
    foodEl.value = food;
    timeEL.value = time;
    caloriesEl.value = calories;
}