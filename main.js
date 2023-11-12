import "./styles/style.css";
import "./styles/board.css";
import { setupBoardEvents } from "./clickedToken";

let title = `<h1>CONNECT 4</h1>`;
let instructions = `
<ul class="instructions">
  <li>Player 1: <td></td></li>
  <li>Player 2: </li>
</ul>`;
let board = `
<div class="board-container">
  <table class="board">
    <tr>
      <td data-row="0" data-column="0"></td>
      <td data-row="0" data-column="1"></td>
      <td data-row="0" data-column="2"></td>
      <td data-row="0" data-column="3"></td>
      <td data-row="0" data-column="4"></td>
      <td data-row="0" data-column="5"></td>
      <td data-row="0" data-column="6"></td>
    </tr>
    <tr>
      <td data-row="1" data-column="0"></td>
      <td data-row="1" data-column="1"></td>
      <td data-row="1" data-column="2"></td>
      <td data-row="1" data-column="3"></td>
      <td data-row="1" data-column="4"></td>
      <td data-row="1" data-column="5"></td>
      <td data-row="1" data-column="6"></td>
    </tr>
    <tr>
      <td data-row="2" data-column="0"></td>
      <td data-row="2" data-column="1"></td>
      <td data-row="2" data-column="2"></td>
      <td data-row="2" data-column="3"></td>
      <td data-row="2" data-column="4"></td>
      <td data-row="2" data-column="5"></td>
      <td data-row="2" data-column="6"></td>
    </tr>
    <tr>
      <td data-row="3" data-column="0"></td>
      <td data-row="3" data-column="1"></td>
      <td data-row="3" data-column="2"></td>
      <td data-row="3" data-column="3"></td>
      <td data-row="3" data-column="4"></td>
      <td data-row="3" data-column="5"></td>
      <td data-row="3" data-column="6"></td>
    </tr>
    <tr>
      <td data-row="4" data-column="0"></td>
      <td data-row="4" data-column="1"></td>
      <td data-row="4" data-column="2"></td>
      <td data-row="4" data-column="3"></td>
      <td data-row="4" data-column="4"></td>
      <td data-row="4" data-column="5"></td>
      <td data-row="4" data-column="6"></td>
    </tr>
    <tr>
      <td data-row="5" data-column="0"></td>
      <td data-row="5" data-column="1"></td>
      <td data-row="5" data-column="2"></td>
      <td data-row="5" data-column="3"></td>
      <td data-row="5" data-column="4"></td>
      <td data-row="5" data-column="5"></td>
      <td data-row="5" data-column="6"></td>
    </tr>
  </table>
</div>
`;
let currentPlayerPrompt = `<h3 class="current-player">Go Player 1️⃣!</h3>`;
let winnerPrompt = `<h2 class="winner"></h2>`;

document.querySelector("#app").innerHTML =
  title + instructions + board + currentPlayerPrompt + winnerPrompt;
setupBoardEvents(document.querySelector(".board"));
