// dichiarazione di tutte le variabili necessarie da usare all`interno di una o piu' funzioni
let message = document.querySelector("#message");
let play = document.getElementById("play");
let player = document.querySelector("#player");
let slotMachine = document.getElementById("slotMachine");
let punteggioYou = document.getElementById("Puntyou");
let punteggioJoker = document.querySelector("#joker");

let deck1; //variabile per estrazione numero
let deck2; //variabile per estrazione numero

let Puntyou = 0; //variabile conteggio punti
let joker = 0; //variabile conteggio punti

play.addEventListener("click", function () {
  //deck player
  deck1 = parseInt(Math.random() * 10) + 1; // OR Math.Floor
  player.innerHTML = deck1;
  //end deck player
  //
  //
  //deck machine
  deck2 = parseInt(Math.random() * 10) + 1; // OR Math.Floor
  slotMachine.innerHTML = deck2;
  //end deck machine

  //START CONDITION
  if (deck1 > deck2) {
    message.innerHTML = " YOW  WIN";
    Puntyou++;
    punteggioYou.innerHTML = Puntyou;
  } else if (deck1 === deck2) {
    message.innerHTML = "DROW";
  } else {
    message.innerHTML = "YOU  LOSE";
    joker++;
    punteggioJoker.innerHTML = joker;
  }
  message.style.display = "block";
});
