import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import StartNewGame from "./components/StartNewGame";
import { BOARD_ROUTE } from "./constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={StartNewGame} />
        <Route path={BOARD_ROUTE} Component={GameBoard} />
      </Routes>
    </Router>
  );
};

export default App;
