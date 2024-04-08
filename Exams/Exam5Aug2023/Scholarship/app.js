window.addEventListener("load", solve);

function solve() {
    const student = document.getElementById('student');
    const university = document.getElementById('university');
    const score = document.getElementById('score');

    const nextBtn = document.getElementById('next-btn');

    const previewList = document.getElementById('preview-list');
    const candidatesList = document.getElementById('candidates-list');

    nextBtn.addEventListener('click', next)

    function next () {
        const [studentValue, universityValue, scoreValue] = [student.value, university.value, score.value];

        const inputIsValid = studentValue && universityValue && scoreValue;

        if (!inputIsValid) {
            return;
        }



        const application = createApplication(student.value, university.value, score.value);

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', () => {
            restartInput(studentValue, universityValue, scoreValue);
            previewList.remove(application);
            nextBtn.disabled = false;
        });

        const applyBtn = document.createElement('button');
        applyBtn.classList.add('action-btn', 'apply');
        applyBtn.textContent = 'apply';
        applyBtn.addEventListener('click', () => {
            previewList.remove(application);
            nextBtn.disabled = false;
            const candidates = createApplication(studentValue, universityValue, scoreValue);
            candidatesList.appendChild(candidates);
        });

        application.appendChild(editBtn);
        application.appendChild(applyBtn);
        nextBtn.disabled = true;
        previewList.appendChild(application);
        restartInput()
    }

    function createApplication (studentName, university, score) {
        const application = document.createElement('li');
        application.classList.add('application');

        application.innerHTML = `
        <article>
            <h4>${studentName}</h4>
            <p>University: ${university}</p>
            <p>Score: ${score}</p>
        </article>
        `;

        return application;
    }

    function restartInput(studentValue = '', universityValue = '', scoreValue = '') {
        student.value = studentValue;
        university.value = universityValue;
        score.value = scoreValue;
    }

}
  