import {
  RESET_BOARD,
  RESET_PLAYERS,
  SET_PLAYERS_NAME,
  SET_WINNER,
  UPDATE_BOARD,
} from "../actionTypes";

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

export const setWinner = (payload) => {
  return {
    type: SET_WINNER,
    payload,
  };
};
