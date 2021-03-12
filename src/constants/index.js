export const FIRST_PLAYER_NAME = "firstPlayerName";
export const SECOND_PLAYER_NAME = "secondPlayerName";
export const BOARD_ROUTE = "/board";
export const FIRST_PLAYER_GAMING_VALUE = "X";
export const SECOND_PLAYER_GAMING_VALUE = "O";
export const DRAW = "Draw";
export const GAME_STATUSES = {
  pending: "pending",
  inProgress: "in progress",
  done: "done",
};

export const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${breakpoints.mobileS})`,
  mobileM: `(max-width: ${breakpoints.mobileM})`,
  mobileL: `(max-width: ${breakpoints.mobileL})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  laptopL: `(max-width: ${breakpoints.laptopL})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
  desktopL: `(max-width: ${breakpoints.desktop})`,
};
