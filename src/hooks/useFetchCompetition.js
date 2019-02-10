import {useState, useEffect} from "react";

import {CHAMPIONS_LEAGUE_API} from "../configs/api";

function useFetchCompetition(){
  var [state, handleState] = useState({
    isLoading: true,
    data: {
      competition: {},
      season: {},
      teams: {}
    }
  });


  useEffect(() => {

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
      var {competition, season, teams} = JSON.parse(xhr.responseText);

      handleState({
        isLoading: false,
        data: {
          competition,
          season,
          teams
        }
      })
    });

    xhr.open("GET", CHAMPIONS_LEAGUE_API);
    xhr.setRequestHeader("X-Auth-Token", process.env.REACT_APP_AUTH_TOKEN);
    xhr.send();

    return function cleanup(){
      xhr.abort();
    };
  }, []);

  return state;
}


export default useFetchCompetition;
