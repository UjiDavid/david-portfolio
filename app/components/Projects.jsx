'use client';

import { useState } from 'react';
import { projectsInfo, graphicsInfo, photosInfo, wordpressInfo } from '../constants';
import ProjectItem from './ProjectItem';
import GraphicItem from './GraphicItem';
import PhotoItem from './PhotoItem';

const Projects = () => {
  const [projectType, setProjectType] = useState('webProjects');

  let content = (
    <>
      <h3 className="py-4">Websites built using React</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsInfo.map((project) => (
          <ProjectItem
            title={project.name}
            key={project.name}
            tech={project.tech}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </>
  );
  if (projectType === 'wordpressProjects') {
    content = (
      <>
        <h3 className="py-4">Websites built using Wordpress under Gain Infinity</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {wordpressInfo.map((project) => (
            <ProjectItem
              title={project.name}
              key={project.name}
              tech={project.tech}
              description={project.description}
              image={project.image}
              link={project.link}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </>
    );
  }
  if (projectType === 'designProjects') {
    content = (
      <>
        <h3 className="py-4">My Design portfolio</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {graphicsInfo.map((graphic) => (
            <GraphicItem
              title={graphic.name}
              key={graphic.name}
              description={graphic.description}
              image={graphic.image}
            />
          ))}
        </div>
      </>
    );
  }
  if (projectType === 'photoProjects') {
    content = (
      <>
        <h3 className="py-4">My Photography Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {photosInfo.map((photo) => (
            <PhotoItem
              title={photo.name}
              key={photo.key}
              description={photo.description}
              image={photo.image}
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#fcb00b]">Projects</p>
      <div id="projects" className="w-full">
        <div className="flex flex-col w-[98%] md:flex-row justify-between">
          <h2 className="py-4">My Portfolio</h2>
          <div className="flex py-6 items-start md:items-end">
            <div
              onClick={() => setProjectType('webProjects')}
              className={
                projectType === 'webProjects'
                  ? 'bg-[#fcb00b] font-semibold flex items-center justify-between border-r-2 border-gray-500 rounded-l-full shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
                  : 'flex items-center justify-between border-r-2 border-gray-500 rounded-l-full shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
              }
            >
              <p className="px-1 md:px-3">React</p>
            </div>
            <div
              onClick={() => setProjectType('wordpressProjects')}
              className={
                projectType === 'wordpressProjects'
                  ? 'bg-[#fcb00b] font-semibold flex items-center justify-between border-x-2 border-gray-500 shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
                  : 'flex items-center justify-between border-x-2 border-gray-500 shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
              }
            >
              <p className="px-1 md:px-3">Wordpress</p>
            </div>
            <div
              onClick={() => setProjectType('designProjects')}
              className={
                projectType === 'designProjects'
                  ? 'bg-[#fcb00b] font-semibold flex items-center justify-between border-x-2 border-gray-500 shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
                  : 'flex items-center justify-between border-x-2 border-gray-500 shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
              }
            >
              <p className="px-1 md:px-3">Graphics</p>
            </div>
            <div
              onClick={() => setProjectType('photoProjects')}
              className={
                projectType === 'photoProjects'
                  ? 'bg-[#fcb00b] font-semibold flex items-center justify-between border-l-2 border-gray-500 rounded-r-full shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
                  : 'flex items-center justify-between border-l-2 border-gray-500 rounded-r-full shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-95 ease-in duration-300'
              }
            >
              <p className="px-1 md:px-3">Photos</p>
            </div>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Projects;
