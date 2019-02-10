import React from "react";

import Nav from "../../components/Nav";

import useFetchCompetition from "../../hooks/useFetchCompetition";

import "./styles.css";

var AppDataContext = React.createContext();

function App(props) {

  var compettion = useFetchCompetition();

  return <AppDataContext.Provider value={compettion}>
    <div className="App">
      <Nav />
      {props.children}
    </div>
  </AppDataContext.Provider>;
}

export {AppDataContext};

export default App;
