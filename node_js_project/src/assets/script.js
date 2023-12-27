
// Flipcard data

let i = 2; // change this to the id of the project
console.log(i);
var flipcards = [];
var remainingFlipcards = [];
let currentFlipcardIndex = 0;

function dataParser(data) {
  for (let i = 0; i < data.length; i++) {
    flipcards.push({ question: data[i].element_1, answer: data[i].element_2 })
  }
};
const url = `http://localhost:3000/api/projects/${i}/cards` // the cards
const url2 = "http://localhost:3000/api/projects/" // the project name
// fetch informations from the api

fetch(url) // fetch cards informations
  .then(response => {
    // Vérifiez si la requête a réussi (statut 200)
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }

    // Parsez la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Utilisez les données JSON dans notre code
    dataParser(data);
    console.log(flipcards);
    remainingFlipcards = [...flipcards];
    updateFlipcard();
    updateProgressBar();
  })
  .catch(error => {
    // Gérez les erreurs de requête
    console.error('Erreur de requête:', error);
  });

fetch(url2) // change page name
  .then(response => {
    // Vérifiez si la requête a réussi (statut 200)
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }

    return response.json();
  })
  .then(data2 => {
    console.log(data2)
    const elementAtIndexI = data2[i];
    console.log(elementAtIndexI)
    document.querySelector('.title-page').innerHTML = elementAtIndexI.name;
  })

// Elements
const flipCard = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');
const flipCardFront = document.querySelector('.flip-card-front');
const flipCardBack = document.querySelector('.flip-card-back');
const progressBarFill = document.querySelector('.progress-bar-fill');
const greenButton = document.querySelector('.green-button');
const redButton = document.querySelector('.red-button');

// Initial setup
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
