import React from "react";
import propertyImg from "../public/assets/projects/property.jpeg";
import cryptoImg from "../public/assets/projects/crypto.jpeg";
import netflixImg from "../public/assets/projects/netflix.jpeg";
import twitchImg from "../public/assets/projects/twitch.jpeg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
            tech="Next.js"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/cryptoapp"
            tech="React.js"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflixclone"
            tech="React.js"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={twitchImg}
            projectUrl="/twitchclone"
            tech="Next.js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
