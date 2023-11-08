// UI
let start = document.getElementById("start");
let time = document.getElementById("time");
let operation = document.querySelector(".operation");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

// Variables

let timeLeft = 10;
let timeInt;
let highScore = 0;
let score = 0;
let correctAnswer = 0;

// DOM + function
start.addEventListener("click", () => {
  nextQuestion();
  start.disabled = true;
  time.classList.remove("hidden");
  timeInt = setInterval(() => {
    timeLeft -= 1;
    time.textContent = `Time left: ${timeLeft}`;
    if (timeLeft == 0) {
      clearInterval(timeInt);
      btn1.disabled = true;
      btn2.disabled = true;
      btn3.disabled = true;
      btn4.disabled = true;
    }
  }, 1000);
});

function nextQuestion() {
  let firstNum = Math.ceil(Math.random() * 12);
  let secondNum = Math.ceil(Math.random() * 12);
  correctAnswer = firstNum * secondNum;
  operation.textContent = `${firstNum}*${secondNum}`;

  let wrongAnswer1 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongAnswer2 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongAnswer3 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);
  let wrongAnswer4 =
    Math.ceil(Math.random() * 12) * Math.ceil(Math.random() * 12);

  btn1.textContent = wrongAnswer1;
  btn2.textContent = wrongAnswer2;
  btn3.textContent = wrongAnswer3;
  btn4.textContent = wrongAnswer4;

  let correctAnswerIndex = Math.floor(Math.random() * 4) + 1;
  let correctAnswerId = `btn${correctAnswerIndex}`;
  document.getElementById(correctAnswerId).textContent = correctAnswer;
}
btn1.addEventListener("click", () => {
  checkAnswer(1);
});
btn2.addEventListener("click", () => {
  checkAnswer(2);
});
btn3.addEventListener("click", () => {
  checkAnswer(3);
});
btn4.addEventListener("click", () => {
  checkAnswer(4);
});
function checkAnswer(buttonIndex) {
  let answer = document.getElementById(`btn${buttonIndex}`).textContent;
  if (answer == correctAnswer) {
    score += 1;
    document.getElementById(
      "currentScore"
    ).textContent = `Current Score: ${score}`;
  }else{
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        btn4.disabled=true;
}

  nextQuestion();
}
