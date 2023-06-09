let cardsArr = [];

class Card {
  constructor() {}
  createCards() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < 10; i++) {
      let card = document.createElement("div");
      let fakeCard = document.createElement("div");
      card.classList.add("memory__card");
      fakeCard.classList.add("memory__fakeCard");
      let name = `memory__card${shuffledNumbers[i]}`;
      let fakeName = `memory__fakeCard${shuffledNumbers[i]}`;
      fakeCard.classList.add(fakeName);
      card.classList.add(name);
      card.textContent = shuffledNumbers[i];
      fakeCard.appendChild(card);
      cardsArr.push(fakeCard);
    }
  }
}
const start = () => {
  let card = new Card();
  card.createCards();
  card.createCards();
  shuffledCards = cardsArr.sort((a, b) => 0.5 - Math.random());
  shuffledCards.forEach((card) => {
    document.querySelector(".memory").appendChild(card);
  });
};
start();
