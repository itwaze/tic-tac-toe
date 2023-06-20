import { combineReducers, createStore } from "redux";

import { gameReducer, playersReducer } from "./reducers";

export const store = createStore(
  combineReducers({ game: gameReducer, players: playersReducer })
);
