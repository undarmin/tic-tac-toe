const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  function placeMarker(marker, position) {
    if (
      (marker !== "X" && marker !== "O") ||
      board[position] ||
      position >= 9
    ) {
      return "Invalid placement";
    } else {
      board[position] = marker;
    }
  }

  function showBoard() {
    console.table({
      row1: board.slice(0, 3),
      row2: board.slice(3, 6),
      row3: board.slice(6, 9),
    });
  }

  function clear() {
    board.forEach((tile) => (board[board.indexOf(tile)] = ""));
  }

  function checkWin() {
    if (
      // diagonal conditions
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X") ||
      // horizontal line conditions
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      // vertical line conditions
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X")
    ) {
      return "X wins!";
    } else if (
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[4] === "O" && board[6] === "O") ||
      // horizontal line conditions
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      // vertical line conditions
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O")
    ) {
      return "O wins!";
    } else if (board.map((tile) => !!tile).join("").length === 4 * 9) {
      return "Tie";
    } else {
      return;
    }
  }

  return { clear, showBoard, checkWin, placeMarker };
})();
