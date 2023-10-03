/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Tagg McDonald",
  photo: "images/profile.webp",
  favoriteFoods: ["Smoked Brisket", "Ribs", "Sushi"],
  hobbies: ["Mountain Biking", "Programming", "Hiking"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "Pleasant Grove, UT",
    length: "14 Years",
  },
  {
    place: "Brigham City, UT",
    length: "2 Years",
  },
  {
    place: "St. George, UT",
    length: "3 Years",
  }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let imageElement = document.querySelector("#photo");

imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;

  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});

let esomeprazole = {
  id: "mnb78932",
  amount: 23145,
  amountType: "ct",
  expDate: "10/01/2021",
};
let dose = esomeprazole["amount"];
console.log(dose);
