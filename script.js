const roll = document.querySelector(".btn-roll");
const img = document.querySelector("img");
const hold = document.querySelector(".btn-hold");
const playerOne = document.querySelector(".player-0");
const playerTwo = document.querySelector(".player-1");
const scoreOne = document.querySelector(".score-0");
const scoreTwo = document.querySelector(".score-1");
const currentOne = document.querySelector(".current-0");
const currentTwo = document.querySelector(".current-1");
const newbtn = document.querySelector(".btn-new");
let activePlayer, current, scores, playing;
const init = () => {
  activePlayer = 0;
  current = 0;
  scores = [0, 0];
  playing = true;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;
  playerOne.classList.remove("player-winner");
  playerTwo.classList.remove("player-winner");
  playerOne.classList.remove("player-active");
  playerOne.classList.add("player-active");
};
init();
const switchPlayer = function () {
  document.querySelector(`.current-${activePlayer}`).textContent = 0;
  current = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  playerOne.classList.toggle("player-active");
  playerTwo.classList.toggle("player-active");
};
roll.addEventListener("click", function () {
  if (playing) {
    const random = Math.floor(Math.random() * 6) + 1;
    img.src = `dice-${random}.png`;
    if (random !== 1) {
      current = current + random;
      document.querySelector(`.current-${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});
hold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += current;
    document.querySelector(`.score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});
newbtn.addEventListener("click", init);
