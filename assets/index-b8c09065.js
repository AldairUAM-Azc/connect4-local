(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();let o={player:1,board:[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],winner:0};function u(a){a.querySelectorAll("td").forEach(e=>{e.addEventListener("click",c)})}function c(a){i(a.target)}function i(a){m(a),w()&&(o.winner=o.player,document.querySelector(".current-player").textContent="",document.querySelector(".winner").textContent=`Player ${o.winner} WINS!!`,document.querySelectorAll("td").forEach(e=>e.removeEventListener("click",c))),g()}function m(a){let e=parseInt(a.dataset.column),t=f(e);o.board[t][e]=o.player,s(t,e)}function s(a,e){let t=o.player,d=document.querySelector(`td[data-row="${a}"][data-column="${e}"]`),r=`p${t}-token`;d.classList.add(r),document.querySelector(".current-player").textContent=`Go Player ${t===1?2:1}!`}function f(a){let e;for(let t=o.board.length-1;t>-1;t--)if(o.board[t][a]===0)return e=t,e}function w(){return y()||p()||h()}function y(){let a=o.board,e=o.player;for(let t=0;t<a.length;t++)for(let d=0;d<a[0].length-3;d++)if(a[t][d]===e&&a[t][d+1]===e&&a[t][d+2]===e&&a[t][d+3]===e)return!0;return!1}function p(){let a=o.board,e=o.player;for(let t=0;t<a.length-3;t++)for(let d=0;d<a[0].length;d++)if(a[t][d]===e&&a[t+1][d]===e&&a[t+2][d]===e&&a[t+3][d]===e)return!0;return!1}function h(){let a=o.board,e=o.player;for(let t=0;t<a.length-3;t++)for(let d=0;d<a[0].length-3;d++)if(a[t][d]===e&&a[t+1][d+1]===e&&a[t+2][d+2]===e&&a[t+3][d+3]===e)return console.log("down diagonal"+e),!0;for(let t=3;t<a.length;t++)for(let d=0;d<a[0].length-3;d++)if(a[t][d]===e&&a[t-1][d+1]===e&&a[t-2][d+2]===e&&a[t-3][d+3]===e)return console.log("up diagonal"+e),!0;return!1}function g(){o.player=o.player===1?2:1}let b="<h1>CONNECT 4</h1>",P=`
<ul class="instructions">
  <li>Player 1: <td></td></li>
  <li>Player 2: </li>
</ul>`,S=`
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
`,q='<h3 class="current-player">Go Player 1!</h3>',L='<h2 class="winner"></h2>';document.querySelector("#app").innerHTML=b+P+S+q+L;u(document.querySelector(".board"));
