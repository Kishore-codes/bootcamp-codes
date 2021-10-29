const myfun = () => {
  const para = document.getElementById("content");
  para.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

//setTimeout
const timeout = setTimeout(() => {
  console.log("timeout");
}, 2000);

//setInterval
const interval = setInterval(() => {
  console.log("interval");
}, 2000);

const timeButton = document.getElementById("timings");

timeButton.addEventListener("click", () => {
  clearTimeout(interval);
});
