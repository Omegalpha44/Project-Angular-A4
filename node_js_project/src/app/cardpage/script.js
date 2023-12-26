// Flipcard data
const flipcards = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" }
    // Add more flipcard objects as needed
  ];
  const url = "http://localhost:3000/api/projects/1/cards"
  fetch(url)
  .then(response => {
  // Vérifiez si la requête a réussi (statut 200)
  if (!response.ok) {
    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
  }

  // Parsez la réponse en JSON
  return response.json();
  })
  .then(data => {
  // Utilisez les données JSON dans votre code
    console.log(data);
  })
  .catch(error => {
  // Gérez les erreurs de requête
    console.error('Erreur de requête:', error);
  });
  // Counter variables
  let currentFlipcardIndex = 0;
  let remainingFlipcards = [...flipcards];

  // Elements
  const flipCard = document.querySelector('.flip-card');
  const flipCardInner = document.querySelector('.flip-card-inner');
  const flipCardFront = document.querySelector('.flip-card-front');
  const flipCardBack = document.querySelector('.flip-card-back');
  const progressBarFill = document.querySelector('.progress-bar-fill');
  const greenButton = document.querySelector('.green-button');
  const redButton = document.querySelector('.red-button');

  // Initial setup
  updateFlipcard();
  updateProgressBar();

  // Event listeners
  flipCard.addEventListener('click', function () {
    this.classList.toggle('flipped');
  });

  greenButton.addEventListener('click', function () {
    remainingFlipcards.splice(currentFlipcardIndex, 1);
    updateProgressBar();
    if (remainingFlipcards.length > 0) {
      currentFlipcardIndex = (currentFlipcardIndex + 1) % remainingFlipcards.length;
      updateFlipcard();
    } else {
      updateProgressBar();
      setTimeout(function() {
      alert("Congratulations! You have completed all the flipcards. Click OK to go back to the lesson list page");
      window.location.href = "mescours.html";}, 250);
    }
  });

  redButton.addEventListener('click', function () {
    const currentFlipcard = remainingFlipcards[currentFlipcardIndex];
    remainingFlipcards.splice(currentFlipcardIndex, 1);
    if (remainingFlipcards.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * remainingFlipcards.length);
      } while (newIndex === currentFlipcardIndex);
      currentFlipcardIndex = newIndex;
    } else if (remainingFlipcards.length === 1) {
      currentFlipcardIndex = 0;
    }
    remainingFlipcards.push(currentFlipcard);
    updateProgressBar();
    updateFlipcard();
  });

  // Function to update the flipcard content
  function updateFlipcard() {
    const currentFlipcard = remainingFlipcards[currentFlipcardIndex];
    flipCardFront.innerHTML = `<div class="flip-card-text">${currentFlipcard.question}</div>`;
    flipCardBack.innerHTML = `<div class="flip-card-text">${currentFlipcard.answer}</div>`;
    flipCard.classList.remove('flipped');
  }

  // Function to update the progress bar
  function updateProgressBar() {
    const progress = (flipcards.length - remainingFlipcards.length) / flipcards.length * 100;
    progressBarFill.style.width = `${progress}%`;
  }