// javascript
// let firstCard=getRandomCard();
// let secondCard=getRandomCard();
let cards=[]
let sum=0;
let hasBlackjack=false
let isAlive=false
let message=""

let messageEl=document.getElementById("message-el")
let sumel=document.getElementById("sum-el")
let cardel=document.querySelector("#card-el")
let playerell=document.getElementById("player-ell")

// let playerr ={
//     namee="Player 1 ",
//     chipss= 100
// }

// playerell.textContent=playerr.namer + " : ₹ "+playerr.chipss


function getRandomCard(){
   let randomNum= Math.floor(Math.random()*13)+1
   if(randomNum>10){
       return 10
   }
   else if(randomNum===1){
       return 11    
   }
   else{
       return randomNum
   }
   }

function startGame(){
    isAlive=true
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){ 
    sumel.textContent="Sum : "+ sum
cardel.textContent="Cards : "
    for(let i=0;i<cards.length;i++){
        cardel.textContent+=cards[i] + "    "
    }
    
    
    if(sum<=20){
    message="Do you want new card?"
} else if (sum === 21){
    message="you won!"
    hasBlackjack=true
}
else{
    message="you lost"
    isAlive=false
}
messageEl.textContent=message

}

function newCard(){
    // console.log("drawing new card")
    if(isAlive===true && hasBlackjack ===false){
       let card=getRandomCard()
    sum+=5
    renderGame()
    cards.push(card)
    console.log(cards) 
    }
    
}