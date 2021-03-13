import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FIRST_PLAYER_GAMING_VALUE,
  SECOND_PLAYER_GAMING_VALUE,
  GAME_STATUSES,
  DRAW,
} from "constants/index";
import {
  changeCurrentPlayerIndex,
  resetBoard,
  setGameStatus,
  setNumberOfMoves,
  setWinner,
  updateBoard,
  resetPlayers,
} from "store/actions";
import { getWinnerIndexByValue, getWinnerGamingValue } from "./helpers";

import Box from "ui/Box";
import Button from "ui/Button";
import Typography from "ui/Typography";
import ResponsiveWrapper from "./components/ResponsiveWrapper";
import ResponsiveSquare from "./components/ResponsiveSquare";

const GameBoard = () => {
  const { push } = useHistory();
  const { players, game } = useSelector((store) => store);
  const dispatch = useDispatch();

  const { firstPlayerName, secondPlayerName } = players;
  const { board, currentPlayerIndex, numberOfMoves, gameStatus, winner } = game;

  const hasAccess = firstPlayerName && secondPlayerName;
  const isFirstPlayer = currentPlayerIndex === 0;
  const isGameDone = gameStatus === GAME_STATUSES.done;

  const redirectUserWithoutAccess = useCallback(() => {
    if (!hasAccess) push("/");
  }, [hasAccess, push]);

  useEffect(() => {
    redirectUserWithoutAccess();
  }, [redirectUserWithoutAccess]);

  useEffect(() => {
    if (numberOfMoves >= 5) {
      const winnerGamingValue = getWinnerGamingValue(board);
      const winnerIndex = getWinnerIndexByValue(winnerGamingValue);

      if (winnerIndex !== null) {
        const winnerFinalValue =
          winnerIndex === 0
            ? firstPlayerName
            : winnerIndex === 1
            ? secondPlayerName
            : DRAW;

        dispatch(setGameStatus(GAME_STATUSES.done));
        dispatch(setWinner(winnerFinalValue));
      }
    }

    if (numberOfMoves === 1) dispatch(setGameStatus(GAME_STATUSES.inProgress));
  }, [board, numberOfMoves, dispatch, firstPlayerName, secondPlayerName]);

  const onSquareClick = useCallback(
    (index) => () => {
      const boardCopy = [...board];
      const currentPlayerGaminValue = isFirstPlayer
        ? FIRST_PLAYER_GAMING_VALUE
        : SECOND_PLAYER_GAMING_VALUE;

      if (boardCopy[index]) return;

      boardCopy[index] = currentPlayerGaminValue;

      dispatch(changeCurrentPlayerIndex(Number(isFirstPlayer)));
      dispatch(updateBoard(boardCopy));
      dispatch(setNumberOfMoves(numberOfMoves + 1));
    },
    [dispatch, isFirstPlayer, board, numberOfMoves]
  );

  const onRestartGame = useCallback(() => {
    dispatch(resetBoard());
  }, [dispatch]);

  const onNewGame = useCallback(() => {
    dispatch(resetPlayers());
    push("/");
  }, [dispatch, push]);

  const currentPlayer = isFirstPlayer
    ? `${firstPlayerName} ❌`
    : `${secondPlayerName} ⭕️`;

  const winnerWithEmoji = winner === DRAW ? `${winner} 🤝` : `${winner} 🥇`;

  return (
    <ResponsiveWrapper>
      <Typography fontSize="1.5rem" margin="0px auto 8px">
        {isGameDone
          ? `Winner is: ${winnerWithEmoji}`
          : `Current player: ${currentPlayer}`}
      </Typography>
      <Box height="100%" width="100%">
        {board.map((value, i) => {
          return (
            <ResponsiveSquare
              key={i}
              onClick={!isGameDone ? onSquareClick(i) : undefined}
            >
              <Typography fontSize="5rem" margin="0px auto">
                {value}
              </Typography>
            </ResponsiveSquare>
          );
        })}
      </Box>
      <Box justify="space-between" width="100%" margin="16px 0px 0px">
        <Button onClick={onRestartGame}>Restart Game</Button>
        <Button onClick={onNewGame}>New Game</Button>
      </Box>
    </ResponsiveWrapper>
  );
};

export default GameBoard;
