
import React, {Fragment} from "react";

import "./styles.css";

function Card(props){

  return <Fragment>
    {
      props.header ||
      <div className="Card-title">
        <h3>UEFA Champions League</h3>
        <span>2018/2019</span>
      </div>
    }
    <div className="Card">
      {props.children}
    </div>
  </Fragment>
}

export default Card;
