const quizData = [
    {
        question: 'Bay of Bengal is in which state?',
        a: 'West-Bengal',
        b: 'Tamil Nadu',
        c: 'Liquid',
        d: 'Solid'
    },
    {
        question: 'What is in the  middle of paris?',
        a: 'Noter Dame',
        b: "Letter 'R'",
        c: 'Moulin Rouge',
        d: 'Bourgogne'
    },
    {
        question: 'Which of the following table you can eat?',
        a: 'Dining Table',
        b: 'Computer Table',
        c: 'Vegetable',
        d: 'None of these'
    },
];

const questionEl =document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit-ans");


let currentQuiz = 0;

loadQuiz();


function loadQuiz()
{
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submit.addEventListener('click', () => {
    currentQuiz++;

    loadQuiz();
});