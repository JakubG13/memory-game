const cards = [...document.querySelectorAll(".memory__card")];
let number = 0;
let cardTxt1 = "";
let cardTxt2 = "";
let card1 = "";
let card2 = "";
let flag = true;
let moves = 0;
let win = 0;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (number === 0) {
      cardTxt1 = card.textContent;
      card1 = card;
    } else if (number === 1) {
      cardTxt2 = card.textContent;
      card2 = card;
    }

    if (number < 2 && card1 != card2) {
      card.style.opacity = 1;
      number++;
    }
    if (number === 2 && flag === true) {
      moves++;
      document.querySelector(".moves__score").textContent = moves;
      play();
    }
  });
});

const play = () => {
  flag = false;
  setTimeout(() => {
    if (cardTxt1 === cardTxt2 && card1 != card2) {
      card1.style.opacity = 1;
      card1.style.backgroundColor = "limegreen";
      card2.style.opacity = 1;
      card2.style.backgroundColor = "limegreen";
      win++;
      if (win === 10) {
        document.querySelector(
          ".endScreen__msg"
        ).textContent = `You win in ${moves} moves!`;
        document.querySelector(".endScreen").style.display = "flex";
      }
    } else {
      card1.style.opacity = 0;
      card2.style.opacity = 0;
    }
    number = 0;
    cardTxt1 = "";
    cardTxt2 = "";
    card1 = "";
    card2 = "";
    flag = true;
  }, 2000);
};

document
  .querySelector(".endScreen__play-again")
  .addEventListener("click", () => {
    location.reload();
  });
