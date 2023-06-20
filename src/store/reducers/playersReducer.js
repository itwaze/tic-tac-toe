import { FIRST_PLAYER_MARKER, SECOND_PLAYER_MARKER } from "../../constants";
import { RESET_PLAYERS, SET_PLAYERS_NAME } from "../actionTypes";

export const initialState = {
  [FIRST_PLAYER_MARKER]: "",
  [SECOND_PLAYER_MARKER]: "",
};

const playersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PLAYERS_NAME: {
      return { ...state, ...payload };
    }
    case RESET_PLAYERS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default playersReducer;
