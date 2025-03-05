const timeDiv = document.querySelector('div#time');

const updateTime = () => {
  const now = new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })
  const formattedTime = now.toLocaleString();
  timeDiv.textContent = formattedTime;
}

setInterval(updateTime, 1000);

window.onload = (event) => {
  updateTime();
}
