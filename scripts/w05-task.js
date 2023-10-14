/* W05: Programming Tasks */

/* Declare and initialize global variables */

const jsonUrl =
  "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let results = null;
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");

    h3.textContent = temple.templeName;
    img.setAttribute("src", temple.imageUrl);

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async (jsonUrl) => {
  const response = await fetch(jsonUrl);
  if (response.ok) {
    const data = await response.json();
    templeList = data;
    displayTemples(data);
  }
};

/* reset Function */

const reset = () => {
  let list = document.getElementById("temples");
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
};

/* sortBy Function */
const sortBy = (temples) => {
  reset();
  let filtered = document.querySelector("#sortBy");
  switch (filtered.value) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;

    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;

    case "older":
      displayTemples(temples.filter((temple) => temple.dedicated < "1950"));
      break;

    case "all":
      displayTemples(temples);
      break;
  }
};

/* Event Listener */
document
  .querySelector("#sortBy")
  .addEventListener("change", () => sortBy(templeList));

getTemples(jsonUrl);
