import React,{useState} from "react";

function Player(props){
  var [isExpanded, handleExpand] = useState(false);
  var player = props.info;
  var bdate = new Date(player.dateOfBirth).toDateString();

  return <li className={isExpanded ? "expand" :  ""} key={player.id}>
    <div className="title" onClick={() => handleExpand(!isExpanded)}>
      <span>{player.name}</span>
      <span role="img" aria-label="expand player">👇</span>
    </div>
    <div className="info">
      <div><span role="img" aria-label="position">🕹</span>{player.position}</div>
      <div><span role="img" aria-label="nationality">🏳️</span>{player.nationality}</div>
      <div><span role="img" aria-label="birthday">👶</span>{bdate}</div>
    </div>
  </li>;
}

export default Player;
