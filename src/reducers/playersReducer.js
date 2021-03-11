const initialState = {
	firstPlayerName: "",
	secondPlayerName: "",
};

const playersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_PLAYER_NAME":
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default playersReducer;
