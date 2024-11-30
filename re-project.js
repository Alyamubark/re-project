var board = [
    [], 
    [],  
    [], 
    [],  
    [],  
    [],  
    []  
];
 // اللعبة تمشي فقط رأسيا(بالطول) بحيث ان العرض لا لا يحتسب له الفوز 

var player =1 ;
var gameOver = false; 

function selectColumn(column){
    if(gameOver)return ;
    document.getElementById("cell-"+ board[column].length +"-"+column).classList.add("filled-player"+player);
    board [column].push(player);


if (checkWin(column)) {
 
    document.getElementById("winMessage").innerText = "Player " + player + " wins!";
    document.getElementById("winMessage").style.display = "block"; 
    gameOver = true;
}

if (player === 1) {
    player = 2; 
} else {
    player = 1; 
}
let count = 1;
}

function checkWin(column) {
    const row = 5 - board[column].length; 
   
    let count = 1; 

    let checkRow = row - 1;
    while (checkRow >= 0 && board[column][checkRow] === player) {
        count++;
        checkRow--;
    }

   
    checkRow = row + 1;
    while (checkRow < 6 && board[column][checkRow] === player) {
        count++;
        checkRow++;
    }

    
    return count >= 4;
}

