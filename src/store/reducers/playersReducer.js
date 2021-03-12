const initialState = {
  firstPlayerName: "",
  secondPlayerName: "",
};

const playersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PLAYERS_NAME":
      return { ...state, ...payload };
    case "RESET_PLAYERS":
      return { ...state, firstPlayerName: "", secondPlayerName: "" };
    default:
      return state;
  }
};

export default playersReducer;
