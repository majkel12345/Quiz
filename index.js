const quizData = [
    {
        question: 'Ile mam lat?',
        a: '11',
        b: '26',
        c: '30',
        d: '38',
        correct: 'b',
    },
    {
        question: 'Jak mam na imie?',
        a: 'Michał',
        b: 'Marcin',
        c: 'Błażej',
        d: 'Andrzej',
        correct: 'a',
    },
    {
        question: 'Ulubione zwierzę',
        a: 'kot',
        b: 'lis',
        c: 'papuga',
        d: 'pies',
        correct: 'd',
    },
    {
        question: 'ile mam rodzeństwa?',
        a: '1',
        b: '2',
        c: '3',
        d: '10',
        correct: 'b',
    },
    {
        question: 'Klub piłkarski',
        a: 'Liverpool',
        b: 'Manchester City',
        c: 'Manchester United',
        d: 'Chelsea',
        correct: 'a',
    }
]

let currentQuiz = 0;
let score = 0;


const questionEl = document.querySelector('#quest')

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text')
const btn = document.querySelector('.btn')
const answers = document.querySelectorAll('.answer')

const getSelected = () => {

    let answer = undefined

    answers.forEach(answerEl => {

        if(answerEl.checked) {
            answer = answerEl.id
        } 
    });
    return answer
}


const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

const unSelect = () => {
    answers.forEach(answerEl => {
        answerEl.checked = false
    })
}

btn.addEventListener('click', () => {

    const answer = getSelected()

    if(answer) {
        
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        
       if(currentQuiz < quizData.length){
            loadQuiz()
            unSelect()
       } else {
            alert(`twoj wynik to ${score}/5`)
       }
    }
})

loadQuiz()