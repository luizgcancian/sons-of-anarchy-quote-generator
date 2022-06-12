const allQuotes = document.getElementById("quotes").querySelectorAll("p");
const quotesArray = [];
const btn = document.getElementById("btn");
let mainText = document.getElementById("main-text");
let x = 0;
allQuotes.forEach((el) => {
  quotesArray.push(el.innerHTML);
  x++;
});

const bobby = "./imgs/bobby-1.jpg";
const chibs = "./imgs/chibs.jpg";
const gemma = "./imgs/gemma.jpg";
const clay = "./imgs/clay.jpg";
const hale = "./imgs/hale.jpg";
const jax = "./imgs/jax-11.jpg";
const opie = "./imgs/opie.jpg";
const unser = "./imgs/unser.jpg";

function generateQuote() {
  let random = Math.floor(Math.random() * quotesArray.length);
  let quote = allQuotes[random];
  if (quote.getAttribute("character") == "jax") {
    document
      .getElementById("char-image")
      .setAttribute("src", "./imgs/jax-11.jpg");
  } else if (quote.getAttribute("character") == "bobby") {
    document.getElementById("char-image").setAttribute("src", bobby);
  } else if (quote.getAttribute("character") == "chibs") {
    document.getElementById("char-image").setAttribute("src", chibs);
  } else if (quote.getAttribute("character") == "clay") {
    document.getElementById("char-image").setAttribute("src", clay);
  } else if (quote.getAttribute("character") == "gemma") {
    document.getElementById("char-image").setAttribute("src", gemma);
  } else if (quote.getAttribute("character") == "hale") {
    document.getElementById("char-image").setAttribute("src", hale);
  } else if (quote.getAttribute("character") == "opie") {
    document.getElementById("char-image").setAttribute("src", opie);
  } else if (quote.getAttribute("character") == "unser") {
    document.getElementById("char-image").setAttribute("src", unser);
  }
  mainText.innerHTML = allQuotes[random].innerHTML;
}

btn.addEventListener("click", generateQuote());
