let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let players = ["X", "O"];
let currentPlayer;
let available = [];

function setup() {
  let canv = createCanvas(400, 400);
  canv.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  currentPlayer = random(players);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      available.push([i, j]);
    }
  }
}

function nextTurn() {
  let index = floor(random(available.length));
  let spot = available.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  console.log(i, j);
  board[i][j] = currentPlayer;
  currentPlayer = random(players);
}

function mousePressed() {
  nextTurn();
}

function draw() {
  background(220);
  let w = width / 3;
  let h = height / 3;
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let spot = board[i][j];
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      textSize(32);
      strokeWeight(4);
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }
}
