import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { BOARD_ROUTE } from "constants/index";

import StartPage from "components/StartPage";
import Board from "components/Board";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<StartPage />
				</Route>
				<Route path={BOARD_ROUTE}>
					<Board />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
