function solve() {
    const sections = document.querySelectorAll('#quizzie section');
    const result = document.getElementById('results');
    const resultText = result.querySelector('.results-inner h1')

    let index = 0;
    for (const section of sections) {
        section.classList.add(`question${index + 1}`);
        index++;
    }

    let counter = 1;
    let countCorrectlyAnswers = 0;

    function questions() {
        const question = document.querySelector(`.question${counter}`);

        const [leftBtn, rightBtn] = question.querySelectorAll('.answer-text');
        leftBtn.addEventListener('click', (e) => correctlyAnswer(e));
        rightBtn.addEventListener('click', (e) => correctlyAnswer(e));

    }

    function correctlyAnswer(e) {
        const question = document.querySelector(`.question${counter}`);
        const answer = e.target.textContent;

        if (answer === possibleQuestions(`question${counter}`)) {
            countCorrectlyAnswers++;
        }

        //question.style.display = 'none'
        question.classList.add('hidden');
        counter++;

        if (counter > 3) {
            resultText.textContent = countCorrectlyAnswers < 3
                ? `You have ${countCorrectlyAnswers} right answers`
                : "You are recognized as top JavaScript fan!";

            result.style.display = 'block'
        } else {
            const nextQuestion = document.querySelector(`.question${counter}`);
            nextQuestion.classList.remove('hidden')
            //nextQuestion.style.display = 'block';

            questions()
        }
    }

    function possibleQuestions(question) {
        const questions = {
            "question1": "onclick",
            "question2": "JSON.stringify()",
            "question3": "A programming API for HTML and XML documents"
        };

        return questions[question];
    }

    questions();
}
