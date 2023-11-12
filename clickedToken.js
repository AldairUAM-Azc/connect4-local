import { gameState } from "./gameState";

export function setupBoardEvents(tableHTMLElement) {
  tableHTMLElement.querySelectorAll("td").forEach(td => {
    td.addEventListener('click', handlePlay);
  });
}

function handlePlay(ev) {
  playToken(ev.target)
}

function playToken(clickedToken) {
  updateBoard(clickedToken);
  if (checkForWinner()) {
    gameState.winner = gameState.player;
    document.querySelector(".current-player").textContent = "";
    document.querySelector(".winner").textContent = `Player ${gameState.winner} WINS!!`;
    document.querySelectorAll("td").forEach(el => el.removeEventListener("click", handlePlay))
  };
  changeTurn();
}

function updateBoard(clickedToken) {
  let column = parseInt(clickedToken.dataset.column);
  let row = getRowOfPlayingToken(column);
  gameState.board[row][column] = gameState.player;
  updateBoardUI(row, column);
}

function updateBoardUI(row, column) {
  let player = gameState.player;
  let tokenUI = document.querySelector(`td[data-row="${row}"][data-column="${column}"]`);
  let tokenColorClass = `p${player}-token`;
  tokenUI.classList.add(tokenColorClass);
  document.querySelector(".current-player").textContent = `Go Player ${player === 1 ? 2 : 1}!`
}

function getRowOfPlayingToken(column) {
  let row;
  for (let i = gameState.board.length - 1; i > -1; i--) {
    if (gameState.board[i][column] === 0) {
      row = i;
      return row;
    }
  }
}

function checkForWinner() {
  return checkHorizontal()
  || checkVertical()
  || checkDiagonal();
}

function checkHorizontal() {
  let board = gameState.board;
  let player = gameState.player;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length - 3; j++) {
      if (board[i][j] === player
        && board[i][j + 1] === player
        && board[i][j + 2] === player
        && board[i][j + 3] === player) {
        return true;
      }
    }
  }
  return false;
}

function checkVertical() {
  let board = gameState.board;
  let player = gameState.player;
  for (let i = 0; i < board.length - 3; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === player
        && board[i + 1][j] === player
        && board[i + 2][j] === player
        && board[i + 3][j] === player) {
        return true;
      }
    }
  }
  return false;
}

function checkDiagonal() {
  let board = gameState.board;
  let player = gameState.player;
  for (let i = 0; i < board.length - 3; i++) {
    for (let j = 0; j < board[0].length - 3; j++) {
      if (board[i][j] === player
        && board[i + 1][j + 1] === player
        && board[i + 2][j + 2] === player
        && board[i + 3][j + 3] === player) {
        console.log("down diagonal" + player)
        return true;
      }
    }
  }
  for (let i = 3; i < board.length; i++) {
    for (let j = 0; j < board[0].length - 3; j++) {
      if (board[i][j] === player
        && board[i - 1][j + 1] === player
        && board[i - 2][j + 2] === player
        && board[i - 3][j + 3] === player) {
        console.log("up diagonal" + player)
        return true;
      }
    }
  }
  return false;
}

function changeTurn() {
  gameState.player = gameState.player === 1 ? 2 : 1;
}
