const quotes = [
    "Honesty is the best policy.",

    "The truth will set you free, but first it will make you miserable.",
     
    "Integrity is doing the right thing, even when no one is watching.",
    "No legacy is so rich as honesty.",
    "Truth is like the sun. You can shut it out for a time, but it ain't going away.",
    "In a time of deceit telling the truth is a revolutionary act.",
    "The first step toward change is awareness. The second step is acceptance.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."    
    
];

const button = document.querySelector('button');
const quote=document.querySelector('h1'); 

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
     quote.textContent = quotes[randomIndex];
})