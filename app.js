function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9;
  msg.pitch = 1;
  window.speechSynthesis.speak(msg);
}
