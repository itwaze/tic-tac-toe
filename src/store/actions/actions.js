import {
  SET_PLAYERS_NAME,
  RESET_BOARD,
  SET_CURRENT_PLAYER_INDEX,
  SET_GAME_STATUS,
  SET_NUMBER_OF_MOVES,
  SET_WINNER,
  UPDATE_BOARD,
  RESET_PLAYERS,
} from "store/actionTypes";

export const setPlayersName = (payload) => {
  return {
    type: SET_PLAYERS_NAME,
    payload,
  };
};

export const resetPlayers = () => {
  return {
    type: RESET_PLAYERS,
  };
};

export const changeCurrentPlayer = (payload) => {
  return {
    type: SET_CURRENT_PLAYER_INDEX,
    payload,
  };
};

export const updateBoard = (payload) => {
  return {
    type: UPDATE_BOARD,
    payload,
  };
};

export const resetBoard = () => {
  return {
    type: RESET_BOARD,
  };
};

export const setGameStatus = (payload) => {
  return {
    type: SET_GAME_STATUS,
    payload,
  };
};

export const setNumberOfMoves = (payload) => {
  return {
    type: SET_NUMBER_OF_MOVES,
    payload,
  };
};

export const setWinner = (payload) => {
  return {
    type: SET_WINNER,
    payload,
  };
};
