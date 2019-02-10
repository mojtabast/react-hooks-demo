import {useState, useEffect} from "react";
import {TEAM_API} from "../configs/api";

function useFetchTeamInformation(teamId){
  var [state, handleState] = useState({
    isLoading: true,
    data: {}
  });


  useEffect(() => {

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
      var teamData = JSON.parse(xhr.responseText);

      handleState({
        isLoading: false,
        data: teamData
      })
    });

    xhr.open("GET", TEAM_API(teamId));
    xhr.setRequestHeader("X-Auth-Token", process.env.REACT_APP_AUTH_TOKEN);
    xhr.send();

    return function cleanup(){
      xhr.abort();
    };
  }, []);

  return state;
}


export default useFetchTeamInformation;
