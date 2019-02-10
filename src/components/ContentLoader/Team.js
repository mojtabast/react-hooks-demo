import React from "react";
import ContentLoader from "react-content-loader"

function TeamContentLoader(props){

  return <li>
      <ContentLoader
      height={180}
      width={150}
      speed={2}
      primaryColor="var(--primary_dark)"
      secondaryColor="var(--secondary_dark)"
      {...props}
    >
		<rect x="43.36" y="17.64" rx="0" ry="0" width="71.38" height="82.85" />
		<rect x="26.8" y="125.43" rx="0" ry="0" width="102.64" height="5.97" />
		<rect x="47.63" y="145.61" rx="0" ry="0" width="59" height="6" />
    </ContentLoader>
  </li>
}

export default TeamContentLoader;
