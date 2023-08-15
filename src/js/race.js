//======= ЗАБІГ Promise =========//

const horses = ["Senator", "Fire", "Eclipse", "Flying Fox", "Black Nigth"];

const refs = {
  raceBtn: document.querySelector(".js-race-btn"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableResult: document.querySelector(".js-result > tbody"),
};

let raceCount = 0;
refs.raceBtn.addEventListener("click", () => {
  raceCount += 1;
  updateWinnerField("Старт!");
  const promises = horses.map((horse) => run(horse));
  updateProgressField("Забіг розпочався!");
  console.log("%c Забіг розпочався!", "color: coral; font-size: 14px;");
  Promise.race(promises).then(({ horse, time }) => {
    updateWinnerField(
      `Перемогла коняка: "${horse}" з результатом: ${time}секунд!`
    );
    console.log(
      `%c Перемогла коняка: "${horse}" з результатом: ${time}секунд!`,
      "color: lightgreen; font-size: 14px;"
    );
    updateWinnerTable({ horse, time, raceCount });
  });
  Promise.all(promises).then((result) => {
    updateProgressField("Забіг закінчено!");
    console.log(
      "%c Забіг закінчено!",
      "color: lightblue; font-size: 14px;",
      result
    );
  });
});

function updateProgressField(message) {
  refs.progressField.textContent = message;
}
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(1500, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function updateWinnerTable({ horse, time, raceCount }) {
  const tr = `<tr>
      <td>${raceCount}</td>
      <td>${horse}</td>
      <td>${time}</td>
    </tr>`;
  refs.tableResult.insertAdjacentHTML("beforeend", tr);
}
