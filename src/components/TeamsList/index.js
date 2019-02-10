
import React, {useContext} from "react";

import {AppDataContext} from "../../containers/App";
import TeamContentLoader from "../ContentLoader/Team";
import Team from "./Team";

import "./styles.css";

function TeamsList(props){
  var appData = useContext(AppDataContext);
  var teams = appData.data.teams;


  return <ul className="TeamsList">
    {
      appData.isLoading ?
      Array(10).fill(<TeamContentLoader />) :
      teams.map( team => <Team info={team} /> )
    }
  </ul>
}

export default TeamsList;
