import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { BOARD_ROUTE } from "constants/index";

import StartNewGame from "components/StartNewGame";
import GameBoard from "components/GameBoard";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<StartNewGame />
				</Route>
				<Route path={BOARD_ROUTE}>
					<GameBoard />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
