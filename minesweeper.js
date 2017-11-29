document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:  [
    {
      row: 0,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 0,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 1,
      hidden: true,
      isMarked: false,
      isMine: false,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 2,
      hidden: true,
      isMarked: false,
      isMine: true,
      surroundingMines: 0
    }
  ]

}

function startGame () {
  for (var i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

    document.addEventListener('click', checkForWin)

  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {

//for each cell, check conditions for winning:
for (let cell in board.cells) {
  if (board.cells[cell].isMine){ // if it's a mine
    if (!(board.cells[cell].hidden)) { // but it's not marked
      return;
    }
  }
  if (board.cells[cell].hidden) { //there's a hidden cell
    if (!(board.cells[cell].isMine)) // which isn't a mine
    return;
  }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++
    }
  }
  return count
}
