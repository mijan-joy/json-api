const loadQuotes = () => {
  fetch("http://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};
loadQuotes();
const displayQuote = (quote) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quote.quote;
};
