const questions = [
    {
      Question: "What is the capital of India?",
      Answer: [
        { text: "Mumbai", correct: false },
        { text: "Delhi", correct: true },
        { text: "Pune", correct: false },
        { text: "Hyderabad", correct: false },
      ],
    },
    {
      Question: "Which planet is also known as red planet?",
      Answer: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "None", correct: false },
      ],
    },
    {
      Question: "Which is the largest Ocean on the Earth?",
      Answer: [
        { text: "Atlantic", correct: true },
        { text: "Indian", correct: false },
        { text: "Arctic", correct: false },
        { text: "Venus", correct: false },
      ],
    },

  ];
  
  const questionElement = document.getElementById("questions");
  const answerButton = document.getElementById("answer-btn");
  const nextButton = document.getElementById("next-btn");
  const prevButton = document.getElementById("prev-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    prevButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.Question}`;
  
    currentQuestion.Answer.forEach((answer, index) => {
      const label = document.createElement("label");
      label.classList.add("option");
  
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = answer.correct;
      radio.classList.add("radio");
      radio.addEventListener("click", selectAnswer);
  
      const answerText = document.createTextNode(answer.text);
  
      label.appendChild(radio);
      label.appendChild(answerText);
      answerButton.appendChild(label);
    });
  
    prevButton.style.display = currentQuestionIndex > 0 ? "block" : "none";
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "block" : "none";
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const isCorrect = e.target.value === "true";
    if (isCorrect) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      handleprevButton();
    }
  });
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score: ${(score / questions.length) * 100}%`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
    prevButton.style.display = "none";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function handleprevButton() {
    currentQuestionIndex--;
    showQuestion();
  }
  
  startQuiz();