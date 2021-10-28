var rslt = document.getElementsByClassName("result");
var two = document.getElementById("two")
var cWin = document.getElementsByClassName("comWin");
var dw = document.getElementsByClassName("draw");
// var resultStatus = document.querySelectorAll("result");
// var rotate = false;
// var run;
// var degrees = 0;
// function result () {
//     if (pWin==true) {
//         style.display = "block";
//       } else if (pWin==false) {
//         style.display = "none";
//       } else (dw) 
//       style.display = "none";
//       }

function getComputerChoice(){
    const choice = ["sc","rc","pc"];
    const randomNumber=(Math.floor(Math.random()*3));
    return choice[randomNumber];
}
// console.log (computerChoice()) function work!
// var pwin;
let choiceStatus = true;
function playerWin(){
  console.log("player WIn");
}
function computerWin(){
    console.log("Computer Win")
}
function itsDraw(){
    console.log("its a DRAWW")
}


function game (userChoice) {
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice) {
        case "sppc":
        case "rpsc":
        case "pprc":
            // console.log("PLAYER wIN")
            playerWin()
            break;
        case "sppc":
        case "rpsc":
        case "sprc":
            // console.log("COMPUTER WIN")
            computerWin()
            break;
        case "spsc":
        case "rprc":
        case "pppc":
            // console.log("DRAW")
            itsDraw()
            break;

   }
}

function main () {
let counter = 0;
document.getElementById("rockPlayer").addEventListener("click", function(){
    game ("rp")
document.getElementById("paperPlayer").addEventListener("click", function(){
    game ("pp")
})
document.getElementById("scissorPlayer").addEventListener("click", function(){
    game ("sp")
})

document.getElementById("rockComp").addEventListener("click", function(){
    game ("rc")

document.getElementById("paperComp").addEventListener("click", function(){
    game ("pc")
})
document.getElementById("scissorComp").addEventListener("click", function(){
    game ("sc")
})
})

})
}
main ();