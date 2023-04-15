const cards = [...document.querySelectorAll(".memory__card")];
let number = 0;
let cardTxt1 = "";
let cardTxt2 = "";
let card1 = "";
let card2 = "";
const play = () => {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (number === 0) {
        cardTxt1 = card.textContent;
        card1 = card;
      } else if (number === 1) {
        cardTxt2 = card.textContent;
        card2 = card;
      }

      if (number < 2) {
        card.style.opacity = 1;
        number++;
      }
      setTimeout(() => {
        if (cardTxt1 !== cardTxt2) {
          card.style.opacity = 0;
        } else {
          card1.style.opacity = 1;
          card1.style.backgroundColor = "limegreen";
          card2.style.opacity = 1;
          card2.style.backgroundColor = "limegreen";
        }
      }, 2000);
      if (number === 2) {
        setTimeout(() => {
          number = 0;
        }, 2000);
      }
    });
  });
};
play();
