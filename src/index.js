import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import App from "./containers/App";
import Home from "./pages/Home";
import Team from "./pages/Team";

function ChampionsLeagueApp(){

  return <App>
    <Router>
      <Home path="/" />
      <Team path="/team/:id" />
    </Router>
  </App>
}

var rootElement = document.getElementById("ChampionsLeagueApp");
ReactDOM.render(<ChampionsLeagueApp />, rootElement);
