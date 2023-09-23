/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Tagg McDonald";
let currentYear = new Date().getFullYear();
const profilePicture = "images/profile.webp";

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Brisket", "Pulled Pork", "Sushi", "Fresh Veggies"];
foodElement.innerHTML = favoriteFoods;

let favoriteFood = "BBQ RIbs";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br> ${favoriteFoods}`;
