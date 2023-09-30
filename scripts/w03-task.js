/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let add1 = Number(document.querySelector("#add1").value);
  let add2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(add1, add2);
}

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subtract1 = Number(document.querySelector("#subtract1").value);
  let subtract2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(subtract1, subtract2);
};

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

function devide(number1, number2) {
  return number1 / number2;
}

function divideNumbers() {
  let dividend = Number(document.querySelector("#dividend").value);
  let divisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = devide(dividend, divisor);
}
/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numberArray;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numberArray.filter(
  (number) => number % 2 === 1
);

/* Output Evens Only Array */
document.querySelector("#evens").textContent = numberArray.filter(
  (number) => number % 2 === 0
);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numberArray.reduce(
  (sum, number) => sum + number
);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numberArray.map(
  (number) => number * 2
);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numberArray
  .map((number) => number * 2)
  .reduce((sum, number) => sum + number);
