const BASE_URL = "https://api.football-data.org/v2/";
const CHAMPIONS_LEAGUE_API = `${BASE_URL}/competitions/2001/teams`;
const TEAM_API = id => `${BASE_URL}/teams/${id}`;

export {

  CHAMPIONS_LEAGUE_API,
  TEAM_API
};
