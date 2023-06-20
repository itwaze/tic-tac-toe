import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BOARD_ROUTE,
  FIRST_PLAYER_MARKER,
  SECOND_PLAYER_MARKER,
} from "../../constants";
import { setPlayersName } from "../../store/actions";
import { initialState } from "../../store/reducers/playersReducer";
import { Button } from "../Button";
import { FieldGroup, Form, FormTitle, InputField, InputLabel } from "./styles";

const StartNewGame = () => {
  const push = useNavigate();
  const storedPlayers = useSelector((state) => state.players);

  const [players, setPlayers] = useState(initialState);
  const dispatch = useDispatch();

  // handle flow when the user navgationg from the board
  // to the start screen via browser back button
  useEffect(() => {
    const hasStoredPlayers =
      storedPlayers[FIRST_PLAYER_MARKER] && storedPlayers[SECOND_PLAYER_MARKER];

    if (!hasStoredPlayers) return;

    push(BOARD_ROUTE, { replace: true });
  }, [push, storedPlayers]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setPlayersName(players));

    push(BOARD_ROUTE);
  };

  const handleChange = ({ target: { id, value } }) => {
    setPlayers((prevState) => ({ ...prevState, [id]: value }));
  };

  const firstPlayer = players[FIRST_PLAYER_MARKER].trim();
  const secondPlayer = players[SECOND_PLAYER_MARKER].trim();

  const hasPlayers = firstPlayer && secondPlayer;
  const isEqualNames = firstPlayer.toLowerCase() === secondPlayer.toLowerCase();

  const isInvalid = !hasPlayers || isEqualNames;

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Start New Game</FormTitle>
      <FieldGroup>
        <InputLabel>Enter player 1 name:</InputLabel>
        <InputField
          id={FIRST_PLAYER_MARKER}
          value={firstPlayer}
          onChange={handleChange}
        />
      </FieldGroup>
      <FieldGroup>
        <InputLabel>Enter player 2 name:</InputLabel>
        <InputField
          id={SECOND_PLAYER_MARKER}
          value={secondPlayer}
          onChange={handleChange}
        />
      </FieldGroup>
      <Button disabled={isInvalid} type="submit">
        Start New Game
      </Button>
    </Form>
  );
};

export default StartNewGame;
