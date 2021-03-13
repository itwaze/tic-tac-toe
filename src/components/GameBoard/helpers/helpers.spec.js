import { getWinnerGamingValue, getWinnerIndexByValue } from "./helpers";

describe("getWinner", () => {
  it.each`
    board                                                   | result
    ${["X", "X", "X", null, null, null, null, null, null]}  | ${"X"}
    ${[null, "O", null, null, "O", null, "X", "O", "X"]}    | ${"O"}
    ${["O", "X", "O", "X", "O", "X", "X", "O", "X"]}        | ${"Draw"}
    ${[null, null, null, null, null, null, null, "O", "X"]} | ${null}
    ${[]}                                                   | ${null}
    ${undefined}                                            | ${null}
  `("returns $result if board is $board", ({ board, result }) => {
    const winnerValue = getWinnerGamingValue(board);
    expect(winnerValue).toBe(result);
  });
});

describe("getPlayerIndexByGamingValue", () => {
  it.each`
    value     | result
    ${"X"}    | ${0}
    ${"O"}    | ${1}
    ${"Draw"} | ${"Draw"}
    ${""}     | ${null}
  `("returns $result if value is $value", ({ value, result }) => {
    const playerIndex = getWinnerIndexByValue(value);
    expect(playerIndex).toBe(result);
  });
});
