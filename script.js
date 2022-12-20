//Just for checking whether this file working or not
console.log("welcome to tic tac toe");


//Initializing variable
let music = new Audio('back.mp3');
let audioTurn = new Audio('ting.mp3');
let audioGameOver = new Audio('gameOver.mp3');
let turn = "X";
let boxes = document.getElementsByClassName("box");
let gameOver = false;
let backMusic = document.getElementById('backMusic');
let line = document.getElementsByClassName('line');
let x = window.matchMedia("(max-width : 800px)");


//Function to change Turn
const ChangeTurn = () =>{
    return turn ==="X"?"0":"X";
}

//Fucntion for checking win
const checkWin = () =>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,0,0,0,0,0,0],
        [3,4,5,0,10,0,0,25,0],
        [6,7,8,0,20,0,0,50,0],
        [0,3,6,-10,10,90,-29,25,90],
        [1,4,7,0,10,90,0,25,90],
        [2,5,8,10,10,90,29,25,90],
        [0,4,8,0,10,45,2,27,39],
        [2,4,6,0,10,135,-2,27,140],
    ]
    wins.forEach(e =>{
        if( (boxText[e[0]].innerText === boxText[e[1]].innerText ) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !=="")){
            document.getElementsByClassName('info')[0].innerText = boxText[e[0]].innerText + " won";
            gameOver = true;
            document.getElementsByClassName('gameInfo')[0].querySelector('img').style.width = '200px';
            audioGameOver.play();
            if(x.matches){
                line[0].style.width = '77vw';
                line[0].style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;

            }
            else{
                line[0].style.width  = '24vw';
                line[0].style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
        }
    })
}

//Game logic
Array.from(boxes).forEach((element)=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText == ''){
            boxText.innerText = turn;
            audioTurn.play();
            turn = ChangeTurn();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
            else{
                alert("You cannot make a move since game is over");
            }
            checkWin();
        }
        else{
            alert("Wrong Play");
        }
    })
})


//Javascript for reset button
document.getElementById('reset').addEventListener('click',()=>{
    let boxText = document.getElementsByClassName('boxText');
    Array.from(boxText).forEach(e =>{
        e.innerText = "";
        gameOver = false;
        turn = "X";
        document.getElementsByClassName('info')[0].innerText = "Turn for X";
        document.getElementsByClassName('gameInfo')[0].querySelector('img').style.width = '0px';
        line[0].style.width  = '0vw';

    })
})


//Javascript for background music
backMusic.addEventListener('click', ()=>{
    // music.play();
    if(music.currentTime === 0 || music.paused){
        music.currentTime = 0;
        music.play();
        backMusic.innerText = "OFF";
    }
    else{
        music.pause();
        backMusic.innerText = "ON";
    }
})