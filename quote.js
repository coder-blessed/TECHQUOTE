const quotes = [
    "You are the best", 
    "Hello", 
    "I am fine"
];

const quoteButton = document.getElementById("quote-button");
const quoteText = document.getElementById("quote");

quoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); 
    quoteText.textContent = quotes[randomIndex];  
});
