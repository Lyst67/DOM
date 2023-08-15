//======= ЗАБІГ Promise =========//
console.log("Hello");
const horses = [
    "Senator",
    "Fire",
    "Eclipse",
    "Flying Fox",
    "Black Nigth"
];
const refs = {
    riceBtn: document.querySelector(".js-rice-btn"),
    winnerField: document.querySelector(".js-winner"),
    progressField: document.querySelector(".js-progress"),
    tableResult: document.querySelector(".js-result > tbody")
};
console.log(refs.riceBtn);
refs.riceBtn.addEventListener("click", ()=>{
    const promises = horses.map((horse)=>run(horse));
    refs.progressField.textContent(" Забіг розпочався!");
});
console.log("%c Забіг розпочався!", "color: coral; font-size: 14px;");
function run(horse) {
    return new Promise((resolve, reject)=>{
        const time = getRandomTime(1500, 3500);
        setTimeout(()=>{
            resolve({
                horse,
                time
            });
        }, time);
    });
}
// Promise.race(promises).then(({ horse, time }) =>
//   console.log(
//     `%c Перемогла коняка: "${horse}" з результатом: ${time}секунд!`,
//     "color: lightgreen; font-size: 14px;"
//   )
// );
// Promise.all(promises).then((result) =>
//   console.log(
//     "%c Забіг закінчено!",
//     "color: lightblue; font-size: 14px;",
//     result
//   )
// );
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
m;

//# sourceMappingURL=index-rice.e3bbb2f7.js.map
