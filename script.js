
function joinAlert() {
  alert("You joined the Climate Action Movement 🌍");
}

const tips = [
  "Plant trees around your home",
  "Avoid burning waste",
  "Use solar energy",
  "Save water daily",
  "Reduce plastic usage"
];

function showTip() {
  const random = Math.floor(Math.random() * tips.length);
  document.getElementById("tipText").innerText = tips[random];
}
