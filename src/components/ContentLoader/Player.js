import React from "react";
import ContentLoader from "react-content-loader"

function Loader(props){

  return <ContentLoader
    height={30}
    width={100}
    speed={2}
    primaryColor="var(--secondary_dark)"
    secondaryColor="var(--primary_dark)"
    {...props}
  >
    <rect x="5" y="9" rx="0" ry="0" width="90" height="12" />
  </ContentLoader>
}

function PlayerContentLoader(props){

  return <li>
      <div className="title">
        <span>
          <Loader />
        </span>
        <span>
          <Loader />
        </span>
      </div>
  </li>
}

export default PlayerContentLoader;
