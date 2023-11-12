(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const n of d)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(d){const n={};return d.integrity&&(n.integrity=d.integrity),d.referrerPolicy&&(n.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?n.credentials="include":d.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(d){if(d.ep)return;d.ep=!0;const n=t(d);fetch(d.href,n)}})();let o={player:1,board:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],winner:0,tokensPlayed:0,tokenSound:new Audio("tokenDropSound.mp3")};function u(e){e.querySelectorAll("td").forEach(a=>{a.addEventListener("click",c)})}function c(e){i(e.target)}function i(e){o.tokensPlayed+=1,m(e),y()&&(o.winner=o.player,document.querySelector(".current-player").textContent="",document.querySelector(".winner").textContent=`Player ${o.winner==1?"1️⃣":"2️⃣"} WINS!!`,document.querySelectorAll("td").forEach(a=>a.removeEventListener("click",c))),s()&&(o.winner=0,document.querySelector(".current-player").textContent="",document.querySelector(".winner").textContent="ITS A DRAW!",document.querySelectorAll("td").forEach(a=>a.removeEventListener("click",c))),b()}function s(){return o.tokensPlayed>41}function m(e){let a=parseInt(e.dataset.column),t=w(a);o.board[t][a]=o.player,f(t,a)}function f(e,a){let t=o.player,r=document.querySelector(`td[data-row="${e}"][data-column="${a}"]`),d=`p${t}-token`;r.classList.add("drop-token"),r.classList.add(d),setTimeout(()=>o.tokenSound.play(),380),document.querySelector(".current-player").textContent=`Go Player ${t===1?"2️⃣":"1️⃣"}!`}function w(e){let a;for(let t=o.board.length-1;t>-1;t--)if(o.board[t][e]===0)return a=t,a}function y(){return p()||h()||g()}function p(){let e=o.board,a=o.player;for(let t=0;t<e.length;t++)for(let r=0;r<e[0].length-3;r++)if(e[t][r]===a&&e[t][r+1]===a&&e[t][r+2]===a&&e[t][r+3]===a)return!0;return!1}function h(){let e=o.board,a=o.player;for(let t=0;t<e.length-3;t++)for(let r=0;r<e[0].length;r++)if(e[t][r]===a&&e[t+1][r]===a&&e[t+2][r]===a&&e[t+3][r]===a)return!0;return!1}function g(){let e=o.board,a=o.player;for(let t=0;t<e.length-3;t++)for(let r=0;r<e[0].length-3;r++)if(e[t][r]===a&&e[t+1][r+1]===a&&e[t+2][r+2]===a&&e[t+3][r+3]===a)return console.log("down diagonal"+a),!0;for(let t=3;t<e.length;t++)for(let r=0;r<e[0].length-3;r++)if(e[t][r]===a&&e[t-1][r+1]===a&&e[t-2][r+2]===a&&e[t-3][r+3]===a)return console.log("up diagonal"+a),!0;return!1}function b(){o.player=o.player===1?2:1}let S="<h1>CONNECT 4</h1>",P=`
<ul class="instructions">
  <li>Player 1: <td></td></li>
  <li>Player 2: </li>
</ul>`,k=`
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
`,q='<h3 class="current-player">Go Player 1️⃣!</h3>',L='<h2 class="winner"></h2>';document.querySelector("#app").innerHTML=S+P+k+q+L;u(document.querySelector(".board"));
