import { FIRST_PLAYER_MARKER, SECOND_PLAYER_MARKER } from "../../constants";
import { RESET_BOARD, SET_WINNER, UPDATE_BOARD } from "../actionTypes";

const initialBoard = new Uint8Array(9);

const initialState = {
  board: initialBoard,
  currentPlayerMarker: FIRST_PLAYER_MARKER,
  numberOfMoves: 0,
  winner: null,
};

export const X_CELL = 1 << 1;
export const O_CELL = 1 << 2;

const MARKER_MASK = X_CELL | O_CELL;

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BOARD: {
      const board = [...state.board];
      const index = payload;
      const currentCell = board[index];
      const hasMarker = currentCell & MARKER_MASK;

      if (hasMarker) return state;

      const isFirstPlayerTurn =
        state.currentPlayerMarker === FIRST_PLAYER_MARKER;

      board[index] ^= isFirstPlayerTurn ? X_CELL : O_CELL;

      const nextPlayerTurn = isFirstPlayerTurn
        ? SECOND_PLAYER_MARKER
        : FIRST_PLAYER_MARKER;

      return {
        ...state,
        board,
        currentPlayerMarker: nextPlayerTurn,
        numberOfMoves: state.numberOfMoves + 1,
      };
    }
    case RESET_BOARD: {
      return initialState;
    }
    case SET_WINNER: {
      return { ...state, winner: payload };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
