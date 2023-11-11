import { gameState } from "./gameState";

export function setupBoardEvents(tableHTMLElement) {
  tableHTMLElement.querySelectorAll("td").forEach(td => {
    td.addEventListener('click', (ev) => {
      playToken(ev.target)
    });
  });
}

function playToken(clickedToken) {
  updateBoard(clickedToken)
  changeTurn();
}

function getRowOfPlayingToken(column){
  let row;
  for (let i = gameState.board.length - 1; i > -1; i--) {
    if (gameState.board[i][column] === 0) {
      row = i;
      return row
    }
  }
}

function updateBoard(clickedToken) {
  // to emulate a token being dropped into the board
  let column = parseInt(clickedToken.dataset.column);
  let row = getRowOfPlayingToken(column);
  gameState.board[row][column] = gameState.player;
  updateBoardUI(row, column);
}

function updateBoardUI(row, column) {
  let tokenUI = document.querySelector(`td[data-row="${row}"][data-column="${column}"]`);
  tokenUI.textContent = gameState.player;
}



function changeTurn() {
  gameState.player = gameState.player === 1 ? 2 : 1;
}

