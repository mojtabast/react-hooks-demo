
import React, {useContext} from "react";

import {TeamInfoContext} from "../../pages/Team";
import {AppDataContext} from "../../containers/App";

import Player from "./Player";
import TeamOverviewLoader from "../ContentLoader/TeamOverview";
import ActiveCompetitionLoader from "../ContentLoader/ActiveCompetition";
import PlayerLoader from "../ContentLoader/Player";

import "./styles.css";

function TeamInfo(props){
  var appData = useContext(AppDataContext);
  var teamInfo = useContext(TeamInfoContext);
  var teamOverview = !appData.isLoading && appData.data.teams.find( team => team.id == props.teamId);

  return <div className="TeamInfo">

    <section>
      <h3>About</h3>
      {
        appData.isLoading ?
        <TeamOverviewLoader /> :
        <div className="team-overview">
          <img src={teamOverview.crestUrl} alt=""/>
          <div className="about">
            <h2>{ `${teamOverview.name} (${teamOverview.area.name})` }</h2>
            <div className="more">
              <span>Founded: {teamOverview.founded}</span>
              <a href={teamOverview.website}>{teamOverview.website}</a>
            </div>
          </div>
        </div>
      }
    </section>

    <section>
      <h3>Active Competitions</h3>
      <div className="competitions">
        {
          teamInfo.isLoading ?
          Array(3).fill(<ActiveCompetitionLoader />) :
          teamInfo.data.activeCompetitions.map( competition => <div className="label">{competition.name}</div>  )
        }
      </div>
    </section>

    <section>
      <h3>Squad</h3>
      <ul className="players">
        {
          teamInfo.isLoading ?
          Array(5).fill(<PlayerLoader />) :
          teamInfo.data.squad.map( player => <Player info={player} /> )
        }
      </ul>
    </section>
  </div>
}

export default TeamInfo;
