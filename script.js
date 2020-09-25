const quizData = [
    {
        question: 'Bay of Bengal is in which state?',
        a: 'West-Bengal',
        b: 'Tamil Nadu',
        c: 'Liquid',
        d: 'Solid',
        correct: 'c'
    },
    {
        question: 'What is in the  middle of paris?',
        a: 'Noter Dame',
        b: "Letter 'R'",
        c: 'Moulin Rouge',
        d: 'Bourgogne',
        correct: "b"
    },
    {
        question: 'Which of the following table you can eat?',
        a: 'Dining Table',
        b: 'Computer Table',
        c: 'Vegetable',
        d: 'None of these',
        correct: "c"
    },
];
const answerEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl =document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit-ans");


let currentQuiz = 0;
//let answer = undefined;
let score = 0;

loadQuiz();


function loadQuiz()
{
    deSelectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() 
{
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers()
{
    answerEl.forEach((answerEl) => {
        answerEl.checked =false;    })
}

submit.addEventListener('click', () => {

    const answer = getSelected();
    if(answer)
    {
        if(answer === quizData[currentQuiz ].correct)
        {
            score++;
        }    
        currentQuiz++;
        if(currentQuiz < quizData.length) 
        {
            loadQuiz();
        }
        else
        {
            document.getElementById("quiz").innerHTML = "You scored " + score + " out of " + quizData.length;
            //document.getElementById("try").innerHTML = "realoding..";
            //setInterval(function(){ 
              //  location.reload();
             //}, 3000);
            
        }
        
    }
});

function sample()
{
    location.reload();
}