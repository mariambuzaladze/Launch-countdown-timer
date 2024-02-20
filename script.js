const divs = document.getElementsByClassName("number");

let currentTime = new Date().getTime();
let finishTime = new Date("Septemner 25, 2024 12:00:00").getTime();

function timeDifference() {
  let time = finishTime - currentTime;

  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  time -= days * (1000 * 60 * 60 * 24);

  let hours = Math.floor(time / (1000 * 60 * 60));
  time -= hours * (1000 * 60 * 60);

  let minutes = Math.floor(time / (1000 * 60));
  time -= minutes * (1000 * 60);

  let seconds = Math.floor(time / 1000);

  divs[0].textContent = days;
  divs[1].textContent = hours;
  divs[2].textContent = minutes;
  divs[3].textContent = seconds;
}

setInterval(timeDifference, 1000);
