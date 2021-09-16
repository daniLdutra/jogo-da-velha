let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let container = document.querySelector("#container");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click a todos as caixas
for (let i = 0; i < boxes.length; i++) {
  // quando há o click na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    // verificando se ja tem um elemento
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      // computa a jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
      //checa quem venceu
      checkWinCondition();
    }
  });
}
