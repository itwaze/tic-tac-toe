import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Box from "components/Box";
import Button from "components/Button";

const Board = () => {
	const { push } = useHistory();
	const { firstPlayerName, secondPlayerName } = useSelector(
		(store) => store.players
	);

	const hasAccess = firstPlayerName || secondPlayerName;

	const redirectUserWithoutAccess = useCallback(() => {
		if (!hasAccess) push("/");
	}, [hasAccess, push]);

	useEffect(() => {
		redirectUserWithoutAccess();
	}, [redirectUserWithoutAccess]);

	return (
		<Box>
			<Button>New Game</Button>
		</Box>
	);
};

export default Board;
