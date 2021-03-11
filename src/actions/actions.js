import { ADD_PLAYER_NAME } from "actionTypes";

export const addPlayerName = (payload) => {
	return {
		type: ADD_PLAYER_NAME,
		payload,
	};
};
