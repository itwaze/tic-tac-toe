import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "ui/Button";
import Form from "ui/Form";
import Input from "ui/Input";
import Typography from "ui/Typography";
import Box from "ui/Box";

import {
  BOARD_ROUTE,
  FIRST_PLAYER_NAME,
  SECOND_PLAYER_NAME,
} from "constants/index";
import { setPlayersName } from "store/actions";

const StartNewGame = () => {
  const { push } = useHistory();
  const [players, setPlayers] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPlayersName(players));
    push(BOARD_ROUTE);
  };

  const handleChange = ({ target: { name, value } }) => {
    setPlayers((prevState) => ({ ...prevState, [name]: value }));
  };

  const firstPlayerName = players[FIRST_PLAYER_NAME] || "";
  const secondPlayerName = players[SECOND_PLAYER_NAME] || "";

  const trimedFirstPlayerName = firstPlayerName.trim();
  const trimedSecondPlayerName = secondPlayerName.trim();

  const hasPlayesName = trimedFirstPlayerName && trimedSecondPlayerName;
  const isEqualNames =
    trimedFirstPlayerName.toLowerCase() ===
    trimedSecondPlayerName.toLowerCase();

  const isInvalid = !hasPlayesName || isEqualNames;

  return (
    <Form onSubmit={handleSubmit}>
      <Typography fontSize="1.5rem" margin="0px auto 16px">
        Start New Game
      </Typography>
      <Box justify="center" margin="0px 0px 16px">
        <Typography margin="0px 16px 0px 0px">Choose player 1 name:</Typography>
        <Input
          name={FIRST_PLAYER_NAME}
          value={firstPlayerName}
          onChange={handleChange}
        />
      </Box>
      <Box justify="center">
        <Typography margin="0px 16px 0px 0px">Choose player 2 name:</Typography>
        <Input
          name={SECOND_PLAYER_NAME}
          value={secondPlayerName}
          onChange={handleChange}
        />
      </Box>
      <Button disabled={isInvalid} type="submit" margin="16px auto 0px">
        Start New Game
      </Button>
    </Form>
  );
};

export default StartNewGame;
