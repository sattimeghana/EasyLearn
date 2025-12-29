function checkAnswer() {

  // get selected option
  let options = document.getElementsByName("q1");
  let selectedAnswer = "";

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedAnswer = options[i].value;
    }
  }

  // check answer
  if (selectedAnswer === "Stack") {
    document.getElementById("result").innerText =
      "✅ Correct! Stack follows LIFO.";
  } else if (selectedAnswer === "") {
    document.getElementById("result").innerText =
      "⚠️ Please select an answer.";
  } else {
    document.getElementById("result").innerText =
      "❌ Wrong! Correct answer is Stack.";
  }
}
