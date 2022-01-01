//porecent should be red or green if minus or plus
//link in footer is wrong
//button color!

function findStock(event) {
  event.preventDefault();
  let search = document.querySelector("#search-input");
  let apiUrl = `https://finnhub.io/api/v1/search?q=${search.value}&token=c771n0qad3iaenbsmu2g`;
  axios.get(apiUrl).then(tellStock);
}
function tellStock(response) {
  let name = response.data.result[0].description;
  let symbol = response.data.result[0].symbol;
  console.log(symbol);
  let displayName = document.querySelector("#displayName");
  displayName.innerHTML = `${name}`;
  let displaySymbol = document.querySelector("#displaySymbol");
  displaySymbol.innerHTML = `${symbol}`;
  let apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c771n0qad3iaenbsmu2g`;
  axios.get(apiUrl).then(tellQuote);
}

function tellQuote(response) {
  let answer = response.data.c;
  let percent = response.data.dp;
  console.log(answer);
  let newQuote = document.querySelector("#quote");
  let percentChange = document.querySelector("#procent-change");
  newQuote.innerHTML = `${answer} USD`;
  percentChange.innerHTML = `${percent} %`;
}

let showQuote = document.querySelector("#searchForm");
showQuote.addEventListener("submit", findStock);
