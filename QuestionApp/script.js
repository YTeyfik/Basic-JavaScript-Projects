function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

//question prototype
Question.prototype.checkAnswer=function(answer){
    return this.answer===answer;
}

//quiz constructor
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}
//quiz prototype
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}
//quiz finish
Quiz.prototype.isFinish=function(){
    return this.questions.length === this.questionIndex;
}

//quiz guess
Quiz.prototype.guess=function(answer){
    let question=this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


let q1=new Question("What is the best programming languages ?",['C','C++','C#','Java','Javascript','Python','Ruby','R'],'Javascript');
let q2=new Question("What is the most popular programming languages ?",['C','C++','C#','Java','Javascript','Python','Ruby','R'],'Javascript');
let q3=new Question("What is the best modern programming languages ?",['C','C++','C#','Java','Javascript','Python','Ruby','R'],'Javascript');
let q4=new Question("what's language ?",['C','english','C#','Java','Javascript','Python','Ruby','R'],'Javascript');
let q5=new Question("modern programming language ?",['C','C++','C#','Java','Javascript','Python','Ruby','R'],'Javascript');


let questions=[q1,q2,q3,q4,q5];


//Start quiz

let quiz=new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }
    else{
        let question=quiz.getQuestion();
        let choices=question.choices;
        
        document.querySelector('#question').textContent=question.text;

        for(let i=0; i<choices.length; i++){
            let element=document.querySelector('#choice'+i);
            element.innerHTML=choices[i];
            guess('btn'+i,choices[i]);
        }
        showProgress();
    }
}


function showScore(){
let html=`<h2>Score</h2><h4>${quiz.score}</h4>`;

document.querySelector('.card-body').innerHTML=html;
}

function guess(id,guess){
    let btn =document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestion();
    }
}

function showProgress(){
    let totalQuestion =quiz.questions.length;
    let questionNumber =quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML="Question "+questionNumber+' of '+totalQuestion;
    
}