import { combineReducers } from "redux";

import gameReducer from "./boardReducer";
import playersReducer from "./playersReducer";

export default combineReducers({
  players: playersReducer,
  game: gameReducer,
});
