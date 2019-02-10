import React from "react";
import {Link} from "@reach/router";

import "./styles.css";

function Back(){

  return <Link to="/" className="Back">
    <span role="img" aria-label="back">👈</span>
    <span>Back</span>
  </Link>
}


export default Back;
