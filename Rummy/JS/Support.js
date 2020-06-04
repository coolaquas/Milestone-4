let suits = ["H" , "D" , "C" , "S"];
let values = [2,3,4,5,6,7,8,9,10,"J" , "Q" , "K" , "A"];
var game = []; // Close Deck = 0;
var hand = []; // hand = 0
var floatCard = []; // open Deck = 0
var jokerCard;
$(document).ready(function() {
ready();  
});
$("#btn-deal").click(function(){
    $("#btn-deal").hide();
    $("#btn-show").show();
    joker();
    console.log("Joker : " + jokerCard);
    hand.sort();
    dispHand();//hand Display
    cardClick();
});

$("#btn-close").click(function(){
    if(hand.length === 12){  
    closeDeck();
    hand.sort();
    dispHand();
    } else{
        alert("please Drop a card first");
    }
});
$("#openDeck").click(function(){
    if(hand.length === 12){  
        openDeck();
        hand.sort();
        dispHand();
        } else{
            alert("please Drop a card first");
        }
});

$("#btn-show").click(function(){
    let currentHand = setFinder(hand);
    if(currentHand.length < 13){
        console.log("you win");
        document.getElementById('victory-text').classList.add('visible');
    } else {
        console.log("you lose");
        document.getElementById('game-over-text').classList.add('visible');
    }
});


