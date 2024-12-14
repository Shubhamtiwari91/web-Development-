// Sample questions for the quiz
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Start the quiz
function startQuiz() {
  displayQuestion();
  startTimer();
}

// Display the current question and choices
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = '';
  
  question.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.onclick = () => selectAnswer(index);
    choicesContainer.appendChild(choiceButton);
  });
}

// Handle answer selection
function selectAnswer(index) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (index === correctAnswer) {
    score++;
  }
  // Move to next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    submitQuiz();
  }
}

// Timer function
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

// Submit quiz and show score
function submitQuiz() {
  document.getElementById("question-container").style.display = 'none';
  document.getElementById("timer").style.display = 'none';
  document.getElementById("submit-btn").style.display = 'none';
  document.getElementById("score").style.display = 'block';
  document.getElementById("final-score").textContent = score;
}

// Start the quiz when the page loads
window.onload = startQuiz;
