
var baseSudokuURL = 'https://sugoku.herokuapp.com/board?difficulty=';
var currentBoard = null;

// Function to asynchronously access sudoku API and grab a new function
const getNewSudoku = async(difficulty) => {
    console.log("Grabbing sudoku board of difficulty: " + difficulty)
    var sudokuURL = baseSudokuURL + difficulty
    const response = await fetch(sudokuURL);
    responseJSON =  await response.json();
    return responseJSON.board;
}

// When a website is refreshed fetch a new "easy" (default difficulty) sudoku
window.onload = (event) => {
    getNewSudoku("easy")
        .then((board) => {
            currentBoard = board;
            console.log("Got the board!")
            console.log(currentBoard.toString());
            applySudoku()
        })
}

// After getting new sudoku board, apply it to front end
function applySudoku() {
    
}





/*
function getNewSudoku() {
    var request = new XMLHttpRequest()
    request.open('GET', 'https://sugoku.herokuapp.com/board?difficulty=easy')
    request.onload = function(){
    }
    request.send()
    
    console.log(request.response)
}

function getNewSudoku(difficulty) {
    //difficulty = 'easy';
    $.ajax({
        type: 'POST',
        url: 'https://sugoku.herokuapp.com/board?difficulty=easy',
        success: onSuccess
    });
}

function onSuccess(response){
    console.log(response)
}
*/

/*
module.exports {
    console.log('hi');
}

require('make-runnable');
*/