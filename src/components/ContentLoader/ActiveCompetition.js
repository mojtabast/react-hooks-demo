import React from "react";
import ContentLoader from "react-content-loader"

function CompetitionContentLoader(props){

  return <div className="loading">
      <ContentLoader
      height={40}
      width={140}
      speed={2}
      primaryColor="var(--primary_dark)"
      secondaryColor="var(--secondary_dark)"
      {...props}
    >
      <rect x="8.63" y="6.61" rx="0" ry="0" width="122.36" height="28.35" />
    </ContentLoader>
  </div>
}

export default CompetitionContentLoader;
