function Createboard() {
  'use struct';
  const frame = Array.from(document.getElementsByClassName('grid'));
  const h3 = Array.from(document.getElementsByTagName('h3'))[0];
  const resetButton = Array.from(document.getElementsByTagName('a'))[0];
  const winMsg = Array.from(document.getElementsByTagName('h2'))[0];
  let player = "player x";
  let over = false;
  let node; //X or O
  let grid;
  let wonMatch;
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function fillGrid() {
    node = player === "player x" ? "X" : "O";
    this.innerText = node;
    player = player === "player x" ? "player o" : "player x";
    grid = frame.map(node => node.innerText);
    //push the content of each element to separate array
    this.removeEventListener("click", fillGrid);
    determineWinner(grid);
  }

  let tellWhichPlayer = () => {
    h3.innerText = over === true ? "" : player + "'s turn";
  };

  let determineWinner = content => {
    winningCombos.forEach((combo) => {
      if (content[combo[0]] && content[combo[0]] === content[combo[1]] &&
        content[combo[0]] === content[combo[2]]) {
        winMsg.innerText = content[combo[0]] + " wins!";
        frame[combo[0]].classList.add("won");
        frame[combo[1]].classList.add("won");
        frame[combo[2]].classList.add("won");
        resetButton.classList.add("show");
        frame.forEach((ev) => {
          ev.removeEventListener("click", fillGrid);
        });
        over = true;
      }
    });

    if (!content.includes("") && !over) {
      winMsg.innerText = "It's a tie!";
      resetButton.classList.add("show");
      over = true;
    }

    tellWhichPlayer();
  };

  this.addToGrid = () => frame.forEach(ev =>
    ev.addEventListener('click', fillGrid));

  this.clearBoard = () => {
    player = "player x";
    frame.forEach((nodes) => {
      nodes.innerText = "";
    });
    wonMatch = Array.from(document.getElementsByClassName('won'));
    wonMatch.forEach((square) => {
      square.classList.remove("won");
    });
    this.addToGrid();
    resetButton.classList.remove("show");
    over = false;
    winMsg.innerText = "";
    h3.innerText = "player x's turn";
  };
}
const board = new Createboard();
board.addToGrid();