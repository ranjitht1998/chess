let input = "N4";

let input1 = input.split("");
let direction = input[0];
let movement = parseInt(input[1]);

let queen = {};
queen.x = 0;
queen.y = 0;

switch (direction) {
  case "N":
    queen.y += movement;
    if (queen.y > 7) {
      console.log("Out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "S":
    y -= movement;
    if (y < 0) {
      console.log("Out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "E":
    x.queen += movement;
    if (x.queen > 7) {
      console.log("Out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "W":
    x.queen -= movement;
    if (x.queen < 0) {
      console.log("out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "NE":
    x.queen += movement;
    y.queen += movement;
    if (x.queen > 7 || y.queen > 7) {
      console.log("out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "SE":
    x.queen += movement;
    y.queen -= movement;
    if (x.queen > 7 || y.queen < 0) {
      console.log("out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "SW":
    x.queen -= movement;
    y.queen -= movement;
    if (x < 0 || y < 0) {
      console.log("out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
  case "NW":
    x.queen -= movement;
    y.queen += movement;
    if (x < 0 || y > 7) {
      console.log("out of boundary");
    } else {
      board(queen.x, queen.y);
    }
    break;
}

function board(a, b) {
  arr = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];

  console.log("Queen's current Position ->" + arr[a][b]);
}
