import {useState, useEffect} from "react";

import {CHAMPIONS_LEAGUE_API} from "../configs/api";

function useFetchCompetition(){

  // Defining State
  var [state, handleState] = useState({
    isLoading: true,
    data: {
      competition: {},
      season: {},
      teams: {}
    }
  });

  // Creating a side effect that update state after getting response from server.
  useEffect(() => {

    // Making a request using XMLHttpRequest
    // We can also use `fetch`, but I think request cancelation of `fetch` is a little ugly for teaching purpose.
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
      // Extract requirement data from response
      var {competition, season, teams} = JSON.parse(xhr.responseText);

      // Update the state
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

    // In clean up function we are canceling request.
    return function cleanup(){
      xhr.abort();
    };
  // We need to pass the second argument, because we need to invoke it once.
  }, []);

  return state;
}


export default useFetchCompetition;
