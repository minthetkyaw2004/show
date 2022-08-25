var question = {
    question1 : {
        question : 'What does it mean by the word "enterpreneur" ? ',
        option1 : 'a person who begins his own business instead of working in a company',
        option2 : 'a politician who becomes elected in an election',
        option3 : 'a successful chief excecutive officer of a well known company',
        option4 : 'a wise person who has been fulfilled with knowledge in all fields of study'
    },
    question2 : {
        question : 'What is the nearest volume of the water in a cylindrical tank which is half-filled ? The tank has the diameter of 7 metres and a height of 8 metres.',
        option1 : '738 square metres',
        option2 : '616 square metres',
        option3 : '1232 square metres',
        option4 : '154 square metres'
    },
    question3 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question4 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question5 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question6 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question7 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question8 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question9 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    },
    question10 : {
        question : '?',
        option1 : 'hello',
        option2 : 'hello',
        option3 : 'hello',
        option4 : 'hello'
    }
}
var answers = [1,4,2,3,4,1,4,2,2,3];

for(let number = 1; number < 11; number++){

    var repl = number;

    let qsen = eval(`question.question${repl}.question`);

    var questions = `<div class="group"><h3 class="question" id="question${repl}">${repl}. ${qsen}</h3><div class="input-group" id="group${repl}"></div></div>`;

    document.getElementById('box').innerHTML += questions;

    insertQuestion(number);
    
}

function insertQuestion(number){

    var repl = number;

    for(let opt = 1; opt <= 4; opt++){

        let choice = eval(`question.question${repl}.option${opt}`);

        let option =`<input type="radio" name="answer" id="input${repl}-${opt}" value="${opt}"/><label for="input${repl}-${opt}"><span>${opt}.</span><span id="answer${repl}-${opt}">${choice}</span></label><br/>`;

        let target = document.querySelectorAll(`.input-group`)[repl-1];
        target.innerHTML+=option;

    }
 
}


