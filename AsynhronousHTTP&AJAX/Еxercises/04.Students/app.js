function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
    const tableTbody = document.querySelector('#results tbody');


    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('.inputs input')
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    fetchAndDisplayStudents()
    async function fetchAndDisplayStudents() {
        tableTbody.innerHTML = ''; // Ensure table is cleared before adding new rows
        const response = await fetch(baseUrl);
        const students = await response.json();

        Object.values(students).forEach(student => {
            const trElement = document.createElement('tr');
            trElement.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>`;

            tableTbody.appendChild(trElement);
        });
    }


    async function submit() {
        console.log(firstName.value, lastName.value, facultyNumber.value, grade.value)

        const isCorrectInput = firstName.value !== '' && lastName.value !== '' &&
            facultyNumber.value !== '' && grade.value !== '';


        if (isCorrectInput) {
            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        facultyNumber: facultyNumber.value,
                        grade: grade.value,
                    }
                )
            }).then(() => {
                firstName.value = '';
                lastName.value = '';
                facultyNumber.value = '';
                grade.value = '';
            })
        }

        await fetchAndDisplayStudents();
    }

}

attachEvents();