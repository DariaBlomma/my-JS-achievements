const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');
const question = document.querySelector('#question');
const numberOfQuestion = document.querySelector('#number-of-question'),
        numberOfAllQuestions = document.querySelector('#number-of-all-questions');

let indexOfQuestion,
    indexOfPage = 0;

const answersTracker = document.querySelector('#answers-tracker');

const btnNext = document.querySelector('#btn-next');

let score = 0;//result of the game 
const correctAnswer = document.querySelector('#correct-answer'), //number of correct answers
        numberOfAllQuestions2 = document.querySelector('#number-of-all-questions-2'),//in modal window
        btnTryAgain = document.querySelector('#btn-try-again'); //start the game again

const questions = [
    { 
        question: 'What will console.log(1.15 + 2.30) show you? ',
        options: [ 
            '3.45',
            '"3.45"',
            '3.4499999999997',
            '"1.15 + 2.30"',
        ],
        rightAnswer: 3
    
    },
    { 
        question: 'What type of media query does not exist? ',
        options: [ 
            'Device',
            'Speech',
            'All',
            'Print',
        ],
        rightAnswer: 1
    
    },
    { 
        question: 'What will console show you? let one = !![] console.log(one) ',
        options: [ 
            '0',
            '[]',
            'true',
            'false',
        ],
        rightAnswer: 3
    
    }
];

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //show the text of the question
    
    //show the options
    option1.innerHTML = questions[indexOfQuestion].options[0]; 
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; //number of current page
    indexOfPage++;
};

let completedAnswers = []; 

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random()*questions.length);
    console.log(randomNumber)
    let hitDublicate = false; //to check the repeatred questions

    if(indexOfPage == questions.length) {
        quizover();
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDublicate = true;
                }
            });
            if(hitDublicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswersTrackers('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswersTrackers('wrong');
    }
    disabledOptions();
}



for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}


const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
};

const enabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answersTrackers = () => {
    questions.forEach(() =>{
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswersTrackers = status => {
    answersTracker.children[indexOfPage -1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Please select an option');
    } else {
        randomQuestion();
        enabledOptions();
    }
};

const quizover = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answersTrackers(); 
})

