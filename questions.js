
var possibleChoices=[0,1,2,3]

Array.prototype.fisherYates = function(){
    for (var i=this.length-1;i>0;i--){
        var j=Math.floor(Math.random()*i);
        var temp=this[i];
        this[i]=this[j];
        this[j]=temp;
    }
    
    return this
}





// code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.vals=[]
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.vals.push(answer);
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        

 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        var q=possibleChoices.fisherYates();
        for(var i = 0; i < choices.length; i++) {
            console.log(i)
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[q[i]];
            guess("btn" + i, choices[q[i]]);
        }
 
        showProgress();
    }
  MathJax.Hub.Typeset();
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    gameOverHTML+= `The answers you gave were ${quiz.vals} `
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 


var letters=["x","y", "z", "t", "c"];
var letters2=["a","m","s", "u", "v"];  


function AlgebraQ() {
  var a= Math.floor(1+Math.random()*10);
  var b=Math.floor(Math.random()*10);
  var c=Math.floor(1+Math.random()*10);
  var letter=letters[Math.floor(Math.random()*5)];
  var letter2=letters2[Math.floor(Math.random()*5)];
  const equation= (a==1 && c==1)? (`${letter}+${b}`):(c==1)?(`${a}${letter}+${b}`):(a==1)?(`${letter}^${c}+${b}`):(b==0)?(`${a}${letter}^${c}`):(`${a}${letter}^${c}+${b}`);
  const A=(a==1 && c==1)?(`${letter2}-${b}`):(c==1)?(`(${letter2}-${b})/${a}`):(a==1)?(`(${letter2}-${b})^(1/${c})`):(b==0)?(`(${letter2}/${a})^(1/${c})`):(`((${letter2}-${b})/${a})^(1/${c})`);
  const A1=(`((${letter2}-${c})/${b})^(1/${a})`);
  const A2=(`((${letter2}-${a})/${c})^(1/${b})`);
  const A3=(`((${letter2}-${b})/${a})`);

  const answer='$$'+ math.parse(`${letter}`).toTex() + '=' + math.parse(A).toTex()+'$$';
  const answer2='$$'+ math.parse(`${letter}`).toTex() + '=' + math.parse(A1).toTex()+'$$';
  const answer3='$$'+ math.parse(`${letter}`).toTex() + '=' + math.parse(A2).toTex()+'$$';
  const answer4='$$'+ math.parse(`${letter}^${c}`).toTex() + '=' + math.parse(A3).toTex()+'$$';

  const question=`Make ${letter} the subject of:`+'$$'+math.parse(`${letter2}`).toTex()+'='+math.parse(equation).toTex({parenthesis: 'hide'})+'$$';
  return[question,answer,answer2,answer3,answer4];
};



var Q1=AlgebraQ();
var Q2=AlgebraQ();
var Q3=AlgebraQ();
var Q4=AlgebraQ();
var Q5=AlgebraQ();



var questionsAlg = [
    new Question(Q1[0], [Q1[1], Q1[2],Q1[3],Q1[4]], Q1[1]),
    new Question(Q2[0], [Q2[1],Q2[2],Q2[3],Q2[4]], Q2[1]),
    new Question(Q3[0], [Q3[1],Q3[2],Q3[3],Q3[4]], Q3[1]),
    new Question(Q4[0], [Q4[1],Q4[2],Q4[3],Q4[4]], Q4[1]),
    new Question(Q5[0], [Q5[1],Q5[2],Q5[3],Q5[4]], Q5[1])
]
// create quiz
var quiz = new Quiz(questionsAlg);





 
// display quiz
populate();
