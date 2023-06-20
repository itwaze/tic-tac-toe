/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DRAW,
  FIRST_PLAYER_MARKER,
  SECOND_PLAYER_MARKER,
} from "../../constants";
import { getCurrentPlayerMarker, getWinner } from "../../helpers";
import {
  resetBoard,
  resetPlayers,
  setWinner,
  updateBoard,
} from "../../store/actions";
import { getGameSelector, getPlayersSelector } from "../../store/selectors";
import { Button } from "../Button";
import {
  ButtonGroup,
  Deck,
  Marker,
  SquareBox,
  StatusHeader,
  Wrapper,
} from "./styles";

const GameBoard = () => {
  const push = useNavigate();
  const players = useSelector(getPlayersSelector);
  const game = useSelector(getGameSelector);
  const dispatch = useDispatch();

  const firstPlayer = players[FIRST_PLAYER_MARKER];
  const secondPlayer = players[SECOND_PLAYER_MARKER];

  useEffect(() => {
    if (!firstPlayer || !secondPlayer) push("/", { replace: true });
  }, [firstPlayer, push, secondPlayer]);

  const { board, currentPlayerMarker, numberOfMoves, winner } = game;

  const isGameDone = Boolean(winner);

  useEffect(() => {
    if (numberOfMoves < 5) return;

    const winner = getWinner(board, players);

    if (!winner) return;

    dispatch(setWinner(winner));
  }, [board, dispatch, firstPlayer, numberOfMoves, players, secondPlayer]);

  const onSquareClick = (index) => {
    dispatch(updateBoard(index));
  };

  const winnerText =
    winner === DRAW ? `${winner} 🤝` : `Winner is: ${winner} 🥇`;

  const playerName = players[currentPlayerMarker];

  return (
    <Wrapper>
      <StatusHeader>
        {isGameDone ? winnerText : `Now ${playerName} turn`}
      </StatusHeader>
      <Deck>
        {/* convert to regular array that React can understand */}
        {[...board].map((value, i) => {
          return (
            <SquareBox
              key={i}
              onClick={() => (!isGameDone ? onSquareClick(i) : undefined)}
            >
              <Marker>{getCurrentPlayerMarker(value)}</Marker>
            </SquareBox>
          );
        })}
      </Deck>
      <ButtonGroup>
        <Button
          disabled={!numberOfMoves}
          onClick={() => dispatch(resetBoard())}
        >
          Restart Game
        </Button>
        <Button
          onClick={() => {
            dispatch(resetPlayers());
            dispatch(resetBoard());
          }}
        >
          New Game
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default GameBoard;
