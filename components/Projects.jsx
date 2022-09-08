import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpeg';
import twitchImg from '../public/assets/projects/twitch.jpeg';
import restaurantImg from '../public/assets/projects/restaurant.jpeg';
import p4uwbedrijfImg from '../public/assets/projects/p4uwbedrijf.jpeg';

import ProjectItem from './ProjectItem';

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
            title="Restaurant site"
            backgroundImg={restaurantImg}
            projectUrl="/restaurant"
            tech="Next.js"
          />
          <ProjectItem
            title="P4uwbedrijf"
            backgroundImg={p4uwbedrijfImg}
            projectUrl="/p4uwbedrijf"
            tech="Next.js"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
