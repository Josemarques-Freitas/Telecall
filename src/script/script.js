const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    for (const option of currentQuestion.options) {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(button);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        event.target.style.backgroundColor = "#4CAF50"; // Green for correct answer
    } else {
        event.target.style.backgroundColor = "#FF5733"; // Red for wrong answer
    }

    disableOptions();
    nextButton.disabled = false;
}

function disableOptions() {
    const options = document.querySelectorAll("#options-container button");
    options.forEach(option => option.disabled = true);
}

function nextQuestion() {
    resetOptions();
    nextButton.disabled = true;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

function resetOptions() {
    const options = document.querySelectorAll("#options-container button");
    options.forEach(option => {
        option.disabled = false;
        option.style.backgroundColor = "";
    });
}

loadQuestion();
