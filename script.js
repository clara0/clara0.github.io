/* .js files add interaction to your website */

var facts = [
  "For every 100 people in the US, there are 120.5 civilian guns.",
  "Almost 80% of murders in the US are caused by firearms.",
  "The rate of gun-related homicides in the US is 23 times higher than Australia.",
  "Almost 53 people are killed per day from gun violence in the US.",
  "On average, gun violence costs our country $557 billion per year."
];

var fact = document.getElementById("stat");
var btn = document.getElementById("statBtn");
var closeBtn = document.getElementById("closeBtn");
var count = 1;
var navLinks = document.getElementsByClassName("navLink");

closeBtn.addEventListener("click", closePopup);

fact.innerHTML = facts[0];
btn.addEventListener("click", getFact);

function getFact() {
  fact.innerHTML = facts[count];
  count++;

  if (count == facts.length) {
    count = 0;
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
