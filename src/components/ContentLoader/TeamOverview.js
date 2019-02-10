import React from "react";
import ContentLoader from "react-content-loader"

function TeamOverviewContentLoader(props){

  return <div>
      <ContentLoader
      height={100}
      width={500}
      speed={2}
      primaryColor="var(--primary_dark)"
      secondaryColor="var(--secondary_dark)"
      {...props}
    >
		<rect x="0" y="7.64" rx="0" ry="0" width="86.37" height="82.85" />
		<rect x="110" y="24.61" rx="0" ry="0" width="257.63" height="12" />
		<rect x="110" y="63.61" rx="0" ry="0" width="101" height="7" />
		<rect x="390" y="63.79" rx="0" ry="0" width="82.6" height="6.72" />
    </ContentLoader>
  </div>
}

export default TeamOverviewContentLoader;
