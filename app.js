function speak(text) {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

function saveName() {
  let name = document.getElementById("name").value;
  if (name === "") {
    speak("Please enter your name");
    return;
  }
  localStorage.setItem("studentName", name);
  speak("Welcome " + name + ". Your profile is saved.");
}
