import React from "react";
import { Link } from "@reach/router";

import "./styles.css";

function Nav() {
  return <nav>
    <h2>
      <Link to="/">
        <span role="img" aria-label="hooks">📌</span>React Hooks Demo
      </Link>
    </h2>
    <a href="https://01.mojtabast.com/react-hooks-webapp" target="_blank" without rel="noopener noreferrer">
      <span role="img" aria-label="back to article">👉</span> article
    </a>
  </nav>;
}

export default Nav;
