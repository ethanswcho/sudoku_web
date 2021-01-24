
var baseSudokuURL = 'https://sugoku.herokuapp.com/board?difficulty=';
var currentBoard = null;
// Mapping for API return board position to HTML grid positions
var cellMapping = [
    0, 1, 2, 9, 10, 11, 18, 19, 20,
    3, 4, 5, 12, 13, 14, 21, 22, 23,
    6, 7, 8, 15, 16, 17, 24, 25, 26,
    27, 28, 29, 36, 37, 38, 45, 46, 47,
    30, 31, 32, 39, 40, 41, 48, 49, 50,
    33, 34, 35, 42, 43, 44, 51, 52, 53,
    54, 55, 56, 63, 64, 65, 72, 73, 74,
    57, 58, 59, 66, 67, 68, 75, 76, 77,
    60, 61, 62, 69, 70, 71, 78, 79, 80
]


// Function to asynchronously access sudoku API and grab a new function
const getNewSudoku = async(difficulty) => {
    console.log("Grabbing sudoku board of difficulty: " + difficulty)
    var sudokuURL = baseSudokuURL + difficulty
    const response = await fetch(sudokuURL);
    responseJSON =  await response.json();
    return responseJSON.board;
}

// API returns the board in 9 arrays. Join the arrays together for 1 large array
function concatBoard(board) {
    var outBoard = board[0].concat(board[1])
    for(var i = 2; i < 9; i++){
        outBoard = outBoard.concat(board[i]);
    }
    return outBoard;
}

// When a website is refreshed fetch a new "easy" (default difficulty) sudoku
window.onload = (event) => {
    $(document).ready(function() {
        $(".sudoku-container").delay(2000).fadeIn(500);
    });
    getNewSudoku("easy")
        .then((board) => {
            currentBoard = board;
            console.log(currentBoard.toString());
            concatedBoard = concatBoard(currentBoard);
            applyNewSudoku(concatedBoard)
        })
}

// After getting new sudoku board, apply it to front end
function applyNewSudoku(board) {
    var cells = document.getElementsByClassName("grid-item");
    console.log(cells.length)
    for(var i = 0; i<81; i++){
        var value = board[cellMapping[i]];
        if(value != 0){
            cells[i].innerHTML = value;
        }
    }
}

