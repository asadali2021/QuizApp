const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click' , () => {
    currentQuestionIndex++;
    setNextQuestion();
});
function startQuiz(){
 startButton.classList.add('hide');
 shuffledQuestions = questions.sort(() => Math.random() - .5);
 currentQuestionIndex = 0;
 questionContainerElement.classList.remove('hide');
 setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }  
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);     
    });
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button =>  {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length> currentQuestionIndex+1){
        
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}
function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }
    else{
    element.classList.add('wrong');
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
const questions = [
    {
        question: 'What is 2 + 2 ?',
        answers: [
            { text: '4' , correct:true},
            { text: '21' , correct:false},
            { text: '8' , correct:false},
            { text: '5' , correct:false}
        ]
    },
    {
        question: 'Who was the first man to land on moon ?',
        answers: [
            { text: 'Brad Armstrong' , correct:false},
            { text: 'Neil Armstrong' , correct:true},
            { text: 'Josh Armstrong' , correct:false},
            { text: 'Matt Armstrong' , correct:false}
        ]
    },
    {
        question: 'What is value of pie ?',
        answers: [
            { text: '6.02' , correct:false},
            { text: '2.918' , correct:false},
            { text: '3.142' , correct:true},
            { text: '9.8' , correct:false}
        ]
    },
    {
        question: 'What is a program ?',
        answers: [
            { text: 'Set of many transmissions' , correct:false},
            { text: 'Set of instructions' , correct:true},
            { text: 'Set of Software' , correct:false},
            { text: 'Set of Airplanes' , correct:false}
        ]
    },
    {
        question: 'How many alphabets are there in English Language ?',
        answers: [
            { text: '25' , correct:false},
            { text: '26' , correct:true},
            { text: '27' , correct:false},
            { text: '29' , correct:false}
        ]
    },   
    {
        question: 'How many verses are there in Holy Quran ?',
        answers: [
            { text: '2254' , correct:false},
            { text: '4444' , correct:false},
            { text: '8762' , correct:false},
            { text: '6666' , correct:true}
        ]
    },
    {
        question: 'How many pillars does Islam consist of ?',
        answers: [
            { text: '4' , correct:false},
            { text: '5' , correct:true},
            { text: '8' , correct:false},
            { text: '2' , correct:false}
        ]
    },
    {
        question: 'What does "Abra Ca-dabra" means and where does it originate ?',
        answers: [
            { text: 'A french word means "Hello"' , correct:false},
            { text: 'An italian phrase means "Sing"' , correct:false},
            { text: 'A spanish word means "Good Day"' , correct:false},
            { text: 'A Hebrew word means "I create what I speak"' , correct:true}
        ]
    },
    {
        question: 'Where does Milan situated ?',
        answers: [
            { text: 'Italy' , correct:true},
            { text: 'Spain' , correct:false},
            { text: 'Germany' , correct:false},
            { text: 'Malta' , correct:false}
        ]
    },
    {
        question: 'Where does Wembley Arena situated ?',
        answers: [
            { text: 'Oxford' , correct:false},
            { text: 'Cambridge' , correct:false},
            { text: 'London' , correct:true},
            { text: 'Plymouth' , correct:false}
        ]
    },
]