function CreateGame() {

  const a = document.getElementsByTagName('a')[0];
  const h1 = document.getElementById('h1');
  const input = document.getElementById('input');
  const time = document.getElementById('h2');
  const correctOrWrong = document.getElementById('h3');
  const send = document.getElementById('send');
  let onGame = true;
  let count = 20;
  let correct = 0;
  let id;
  let random;
  const textList = [
    'Hello World',
    'Good',
    'I love JavaScript',
    'This is MyApp',
    'Welcome',
    'waves',
    'integration',
    'differentiation',
    'lol',
    'circle'
  ];

  let finish = () => {
    clearInterval(id);
    onGame = false;
    h1.innerText = `You got ${correct} correct!`;
    correctOrWrong.innerText = "";
    a.innerText = "Reset";
    a.addEventListener('click', () => {
      this.init();
    });
  };

  let countDown = () => {
    id = setInterval(function () {
      time.innerText = `Remaining Time: ${--count}`;
      if (count <= 0) {
        finish();
      }
    }, 1000);
  };

  this.event = () => {
    send.addEventListener('click', function () {
      if (!onGame) {
        return;
      }
      if (input.value === h1.innerText) {
        correctOrWrong.innerText = "Correct!";
        correct += 1;
      } else {
        correctOrWrong.innerText = "Wrong:(";
      }
      input.value = '';
      random = Math.floor(Math.random() * textList.length);
      h1.innerText = textList[random];
    });
  };

  this.init = () => {
    onGame = true;
    correct = 0;
    count = 20;
    random = Math.floor(Math.random() * textList.length);
    h1.innerText = textList[random];
    input.value = "";
    input.focus();
    a.innerText = "";
    clearInterval(id);
    countDown();
  };
}

let game = new CreateGame();
game.event();
game.init();