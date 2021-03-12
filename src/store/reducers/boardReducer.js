const defaultSquares = new Array(9).fill(null);

const initialState = {
  board: defaultSquares,
  currentPlayerIndex: 0,
  gameStatus: "pending",
  numberOfMoves: 0,
  winner: null,
};

const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_BOARD":
      return { ...state, board: payload };
    case "RESET_BOARD":
      return initialState;
    case "SET_CURRENT_PLAYER_INDEX":
      return { ...state, currentPlayerIndex: payload };
    case "SET_GAME_STATUS":
      return { ...state, gameStatus: payload };
    case "SET_NUMBER_OF_MOVES":
      return { ...state, numberOfMoves: payload };
    case "SET_WINNER":
      return { ...state, winner: payload };
    default:
      return state;
  }
};

export default gameReducer;
