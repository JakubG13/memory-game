class Card {
  constructor() {
    // const memory = document.querySelector(".memory");
  }
  // metody
  createCards() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let shuffledNumbers = numbers.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < 10; i++) {
      let card = document.createElement("div");
      card.classList.add("memory__card");
      let name = `memory__card${shuffledNumbers[i]}`;
      card.classList.add(name);
      card.textContent = shuffledNumbers[i];
      document.querySelector(".memory").appendChild(card);
    }
  }
}

let card = new Card();
card.createCards();
card.createCards();
