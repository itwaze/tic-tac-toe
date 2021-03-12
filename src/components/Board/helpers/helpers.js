import {
  FIRST_PLAYER_GAMING_VALUE,
  SECOND_PLAYER_GAMING_VALUE,
  DRAW,
} from "constants/index";

export const getWinner = (board = []) => {
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

  winningCombos.forEach((el) => {
    const firstBoardElement = board[el[0]];

    if (
      firstBoardElement &&
      firstBoardElement === board[el[1]] &&
      firstBoardElement === board[el[2]]
    ) {
      winner = board[el[0]];
    } else {
      if (!board.includes(null)) winner = DRAW;
    }
  });

  return winner;
};

export const getPlayerIndexByGamingValue = (value) => {
  switch (value) {
    case FIRST_PLAYER_GAMING_VALUE:
      return 0;
    case SECOND_PLAYER_GAMING_VALUE:
      return 1;
    case DRAW:
      return DRAW;
    default:
      return null;
  }
};
