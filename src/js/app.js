const sum = (a, b) => a * b;
sum(5, 9);
console.log(sum(5, 9));
console.log("Hello world!!!!!!");

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
console.log(select.options);

import { hello, goodbye } from "./modul.js";

console.log(hello());
console.log(goodbye());

// import { user } from "./modul.js";

// document.body.innerHTML = user;
// console.log(user);

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON);

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);

const date = new Date("March 16, 2030 14:25:00");
console.log(date);

console.log(new Date("8.12.2023"));

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"
console.log(date.toDateString());

// const makeGreeting = (guestName) => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve("Це новий Проміс!");
//       }
//       reject("Error!");
//     }, 1500);
//   });
// };
// makePromise()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
