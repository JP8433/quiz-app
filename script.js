const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];



let quiz = document.getElementById('quiz')

let questionHeading = document.getElementById('questionHeading')
let optionList = document.querySelectorAll('.optionList')
console.log(optionList)

let aOption = document.getElementById('aOption')
let bOption = document.getElementById('bOption')
let cOption = document.getElementById('cOption')
let dOption = document.getElementById('dOption')
let submitBtn = document.getElementById('Submit')

let score = 0;
let currentQuizCount = 0;

loadQuiz();
function loadQuiz() {
    deSelect()
    // console.log("Quiz Loaded!")
    let currentQuizData = quizData[currentQuizCount]
    questionHeading.innerText = currentQuizData.question
    aOption.innerText = currentQuizData.a
    bOption.innerText = currentQuizData.b
    cOption.innerText = currentQuizData.c
    dOption.innerText = currentQuizData.d
}
function deSelect() {
    optionList.forEach((element) => { element.checked = false })
}
function getSelect() {
    let selected;
    optionList.forEach((element) => {
        if (element.checked) {
            selected = element.id

        }
        

    })
    return selected;
}
    submitBtn.addEventListener('click', () => {
        let answer = getSelect()
        console.log(answer)
        if (answer) {
            if (answer === quizData[currentQuizCount].correct) {
                score++;
            }
            currentQuizCount++;
            if (currentQuizCount < quizData.length) {
                loadQuiz()
            }
            else {
                quiz.innerHTML = (

                    `
                <h2>You scored${score}/${quizData.length}</h2>
                <button class="submit" onClick=location.reload()>Reload</button>`
                

      
                )

            }
        }   
    })







