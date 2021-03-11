import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import Typography from "components/Typography";
import Box from "components/Box";

import {
	BOARD_ROUTE,
	FIRST_PLAYER_NAME,
	SECOND_PLAYER_NAME,
} from "constants/index";
import { addPlayerName } from "actions";

const StartPage = () => {
	const { push } = useHistory();
	const [players, setPlayers] = useState({});
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addPlayerName(players));
		push(BOARD_ROUTE);
	};

	const handleChange = ({ target: { name, value } }) => {
		setPlayers((prevState) => ({ ...prevState, [name]: value }));
	};

	const firstPlayerValue = players[FIRST_PLAYER_NAME] || "";
	const secondPlayerValue = players[SECOND_PLAYER_NAME] || "";

	const isInvalid = !firstPlayerValue.trim() || !secondPlayerValue.trim();

	return (
		<Form onSubmit={handleSubmit}>
			<Typography variant="body1" margin="0px auto 16px">
				Start New Game
			</Typography>
			<Box justify="center" margin="0px 0px 16px">
				<Typography margin="0px 16px 0px 0px">Choose player 1 name:</Typography>
				<Input
					name={FIRST_PLAYER_NAME}
					value={firstPlayerValue}
					onChange={handleChange}
				/>
			</Box>
			<Box justify="center">
				<Typography margin="0px 16px 0px 0px">Choose player 2 name:</Typography>
				<Input
					name={SECOND_PLAYER_NAME}
					value={secondPlayerValue}
					onChange={handleChange}
				/>
			</Box>
			<Button disabled={isInvalid} type="submit" margin="16px auto 0px">
				Start New Game
			</Button>
		</Form>
	);
};

export default StartPage;
