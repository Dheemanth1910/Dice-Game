function start() {
  var randomNumber1 = (Math.floor(Math.random() * 6 + 1));
  var randomNumber2 = (Math.floor(Math.random() * 6 + 1));
  var ranimg1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", ranimg1);
  var ranimg2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", ranimg2);

  if (ranimg1 > ranimg2) {
    document.querySelectorAll("h1")[0].textContent = "🚩 Player1 wins";
  } else if (ranimg1 < ranimg2) {
    document.querySelectorAll("h1")[0].textContent = "Player2 wins 🚩";
  } else {
    document.querySelectorAll("h1")[0].textContent = "Draw";
  }
}
