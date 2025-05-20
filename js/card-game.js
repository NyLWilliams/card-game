let deck = [];
let hand = [];
let currentIndex = 0;
let score = 0;
function createDeck() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs',];
    const values = [
        { name: 'A', rank: 1 },
        { name: '2', rank: 2 },
        { name: '3', rank: 3 },
        { name: '4', rank: 4 },
        { name: '5', rank: 5 },
        { name: '6', rank: 6 },
        { name: '7', rank: 7 },
        { name: '8', rank: 8 },
        { name: '9', rank: 9 },
        { name: '10', rank: 10 },
        { name: 'J', rank: 11 },
        { name: 'Q', rank: 12 },
        { name: 'K', rank: 13 }
    ];
let newDeck = [];
for(let suit of suits){
    for(let value of values){
        const filename = `${value.name}${suit.name}.svg`;
        newDeck.push({ 
            suit: suit.symbol, 
            name: value.name, 
            rank: value.rank,
            suitLetter: suit.letter, 
            image: `cards-svg/${filename}`
        });
    }
}
}
//Shuffle
for (let i = newDeck.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i +1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
}
return newDeck;
function startGame(){
    deck = createDeck();
    hand = deck.slice(0, 13);//draw 13 cards
    currentIndex = 0;
    score = 0;
    updateCardDisplay();
    document.getElementById("card-image").src = card.image;
    document.getElementById("card-image").alt = `${card.name}${card.suit}`; ;
    document.getElementById("cards-left").textContent = `Cards Left: ${hand.length - currentIndex}`;
}
function updateCardDisplay(){
    const card = hand[currentIndex];
    document.getElementById("card-image").src = card.image;
    document.getElementById("card-image").alt = `${card.name}${card.suit}`; 

}
function makeGuess(guess){
    if(currentIndex >= hand.length - 1){
        document.getElementById("message").textContent ="No more cards! Game Over.";
        return;
    }
    const currentCard = hand[currentIndex];
    const nextCard = hand[currentIndex + 1]; 
    let correct = false;
    if(
        (guess === "higher" && nextCard.rank > currentCard.rank)||
        (guess === "lower" && nextCard.rank < currentCard.rank)
    ) {
        correct = true;
        score++;
    }
    let message = `Next card was ${nextCard.name}${nextCard.suit}.`
    message += correct ? "Correct!" : "Wrong!";

    currentIndex++;
    updateCardDisplay();
    document.getElementById("card-image").src = card.image;
    document.getElementById("card-image").alt = `${card.name}${card.suit}`; 
    document.getElementById("cards-left").textContent = `Cards Left: ${hand.length - currentIndex}`;
    if (currentIndex === hand.length -1){
        document.getElementById("message").textContent += `Game Over! Final Score: ${score}/12`;
    }
}
startGame();


