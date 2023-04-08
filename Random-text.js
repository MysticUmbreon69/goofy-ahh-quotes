const phrases = [
  "Hello, World!",
  "How are you today?",
  "This is a random text.",
  "What is the meaning of life?",
  "I love learning new things!",
  "Have a nice day!",
  "Stay curious!",
  "The sky is the limit.",
  "Anything is possible!",
];

function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

const randomText = document.getElementById("random-text");

setInterval(() => {
  randomText.textContent = getRandomPhrase();
}, 3000);
