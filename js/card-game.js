let currentCard = getRandomCard();
let score = 0;
document.getElementById('card').innerText = currentCard;
function getRandomCard(){
    return Math.floor(Math.random() * 13) + 1;
}
function guess(direction){
    const nextCard = getRandomCard();
    let correct = false;
    if(direction === 'higher' && nextCard > currentCard) correct = true;
    if(direction === 'lower' && nextCard > currentCard) correct = true;
    if(correct){
        score++;
        document.getElementById('result'). innerText = `Correct! Score: ${score}`;
        currentCard = nextCard;
    } else {
        document.getElementById('result').innerText = `Wrong! FInal Score: ${score}`;
        document.getElementById('card').innerText = nextCard
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }

}