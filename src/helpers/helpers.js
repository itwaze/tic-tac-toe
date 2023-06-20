import { DRAW, FIRST_PLAYER_MARKER, SECOND_PLAYER_MARKER } from "../constants";
import { O_CELL, X_CELL } from "../store/reducers/boardReducer";

export const getCurrentPlayerMarker = (cell) => {
  if (cell & X_CELL) return FIRST_PLAYER_MARKER;
  if (cell & O_CELL) return SECOND_PLAYER_MARKER;

  return "";
};

export const getWinner = (board, players) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = null;

  const hasEmptyField = board.includes(0);

  if (!hasEmptyField && !winner) winner = DRAW;

  winningCombos.forEach((combo) => {
    const [firstCell, secondCell, thirdCell] = combo;

    const firstPlayerName = players[FIRST_PLAYER_MARKER];
    const secondPlayerName = players[SECOND_PLAYER_MARKER];

    // no combo - interrupt iteration
    if (!(board[firstCell] & board[secondCell] & board[thirdCell])) return;

    winner = board[firstCell] & X_CELL ? firstPlayerName : secondPlayerName;
  });

  return winner;
};
