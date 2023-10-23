//  Imports
import humanReadable from "./time.js";

// Global vars
const jsonUrl = "https://kontests.net/api/v1/all"; // This endpoint does not end in json but it does return json content
let contests = null;
const contestsElement = document.getElementById("contests");
let contestsList = [];

const getContests = async (jsonUrl) => {
  const response = await fetch(jsonUrl);
  if (response.ok) {
    const data = await response.json();
    contestsList = data;
    displayContests(data);
  }
};

const displayContests = (contests) => {
  contests.forEach((contest) => {
    let name = document.createElement("div");
    let host = document.createElement("div");
    let start = document.createElement("div");
    let end = document.createElement("div");
    let duration = document.createElement("div");
    let status = document.createElement("div");
    let hostLink = document.createElement("a");
    let link = document.createTextNode(contest.site);
    let startTime = new Date(contest.start_time).toLocaleString();
    let endTime = new Date(contest.end_time).toLocaleString();

    name.textContent = contest.name;
    hostLink.href = contest.url;
    hostLink.title = contest.site;
    start.textContent = startTime;
    end.textContent = endTime;
    duration.textContent = humanReadable(contest.duration);
    status.textContent = contest.status;

    hostLink.appendChild(link);
    host.appendChild(hostLink);
    hostLink.classList.add("underline");

    contestsElement.appendChild(name);
    contestsElement.appendChild(host);
    contestsElement.appendChild(start);
    contestsElement.appendChild(end);
    contestsElement.appendChild(duration);
    contestsElement.appendChild(status);
  });
};

const filterBy = (contests) => {
  reset();
  let filtered = document.querySelector("#filter");
  switch (filtered.value) {
    case "active":
      displayContests(
        contests.filter((contest) => contest.status.includes("CODING"))
      );
      break;

    case "upcoming":
      displayContests(
        contests.filter((contest) => contest.status.includes("BEFORE"))
      );
      break;

    case "starting":
      displayContests(
        contests.filter(
          (contest) =>
            contest.in_24_hours === "Yes" && contest.status.includes("BEFORE")
        )
      );
      break;

    case "all":
      displayContests(contests);
      break;
  }
};

const reset = () => {
  let list = document.getElementById("contests");
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
};

document
  .querySelector("#filter")
  .addEventListener("change", () => filterBy(contestsList));

getContests(jsonUrl);
