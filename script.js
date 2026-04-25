function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase().trim();
  const correctAnswer = "cafe zondag";

  if (answer === correctAnswer) {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("anniversary-screen").style.display = "block";
  } else {
    document.getElementById("error-message").textContent = "Not quite... try again ❤️";
  }
}
