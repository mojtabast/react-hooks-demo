import React from "react";

import Card from "../components/Card";
import TeamInfo from "../components/TeamInfo";
import Back from "../components/Back";

import useFetchTeamInformation from "../hooks/useFetchTeamInformation";

var TeamInfoContext = React.createContext();

function Team(props) {

  var teamId = props.id;
  var team = useFetchTeamInformation(teamId);

  return <TeamInfoContext.Provider value={team}>
    <Card header={<Back />}>
      <TeamInfo teamId={teamId} />
    </Card>
  </TeamInfoContext.Provider>;
}

export {TeamInfoContext};
export default Team;
