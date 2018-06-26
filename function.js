// position is position of where the user in the test or which question they're up to
let position = 0, quiz, quizStatus, question, option, options, opA, opB, opC, correct = 0;

var allQuestions = [
  {
    question: "What game did the Russian coach Stanislav Cherchesov get his squad to play prior to the start of the World Cup to relax them?",
    options: [
      "Trivial Pursuit",
      "Chinese Checkers",
      "Twilight Struggle"
    ],
    answer: "A"
  },
  {
    question: "What is the nickname of the Mexican winger Hirving Lozano, who played a starring role in their upset win over Germany? It comes from the pranks he used to play on his teammates after hiding under beds and jumping out on them, similar to the killer doll from a movie series.",
    options: [
      "Buffy",
      "Leatherface",
      "Chucky"
    ],
    answer: "C"
  },
  {
    question: "Among the 23 players in the Iceland squad for the 2018 World Cup, all but one name doesn’t end with ‘son’. Who is the odd one out?",
    options: [
      "Olafur Karl Finsen",
      "Fredrik Schram",
      "Johann Laxdal"
    ],
    answer: "B"
  },
  {
    question: "The first African team to reach a World Cup quarterfinal is playing in the current edition in a group that includes an Asian nation. Which team and when did they achieve this feat?",
    options: [
      "Morocco, 1986",
      "Tunisia, 1978",
      "Senegal, 2002"
    ],
    answer: "A"
  },
  {
    question: "The Portugese Carlos Queiroz is the current manager of the Iran football team. He served 5 seasons as an assistant manager and a vital cog to the success of which Premier League side between 2002 and 2008?",
    options: [
      "Chelsea",
      "Manchester United",
      "Arsenal"
    ],
    answer: "B"
  },
]

// this get function is short for the getElementById function
function get(x){
  return document.getElementById(x);
}

function getNextQuestion(){
  quiz = get("quiz");
  if(position >= allQuestions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+allQuestions.length+" questions correct</h2>";
    get("quizStatus").innerHTML = "Quiz Completed!";
    document.getElementById("button").disabled="true";
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("quizStatus").innerHTML = "Question "+(position+1)+" of "+allQuestions.length;

  question = allQuestions[position].question;
  opA = allQuestions[position].options[0];
  opB = allQuestions[position].options[1];
  opC = allQuestions[position].options[2];
  rightAnswer = allQuestions[position].answer;
  quiz.innerHTML = "<h3>"+question+"</h3>";
  quiz.innerHTML += "<input type='radio' name='options' value='A' required> "+opA+"<br>";
  quiz.innerHTML += "<input type='radio' name='options' value='B' required> "+opB+"<br>";
  quiz.innerHTML += "<input type='radio' name='options' value='C' required> "+opC+"<br><br>";
}
function checkAnswer(){
  options = document.getElementsByName("options");
  for(var i=0; i<options.length; i++){
    if(options[i].checked){
      option = options[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(option === rightAnswer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  position++;
  // then the renderQuestion function runs again to go to next question
  getNextQuestion();
}
window.addEventListener("load", getNextQuestion, false);
