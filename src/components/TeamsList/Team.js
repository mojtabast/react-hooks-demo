import React from "react";
import { Link } from "@reach/router";

import unknown from "../../resources/unknown.svg";

function Player(props){
  var team = props.info;

  return <li key={team.id}>
    <Link to={`/team/${team.id}`}>
      <img src={team.crestUrl || unknown} alt=""/>
      <span className="name">{team.shortName}</span>
      <span className="country">{team.area.name}</span>
    </Link>
  </li>
}

export default Player;
