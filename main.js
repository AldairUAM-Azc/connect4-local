import "./styles/style.css";
import "./styles/board.css"
import { gameState } from "./gameState";
import { setupBoardEvents } from "./clickedToken";

let title = `<h1>CONNECT 4</h1>`;
let boardHTML = `
<div>
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

document.querySelector("#app").innerHTML = title + boardHTML;
setupBoardEvents(document.querySelector(".board"));