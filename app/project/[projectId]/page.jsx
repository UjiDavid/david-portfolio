'use client';
import Image from 'next/image';
import React from 'react';

import { useParams } from 'next/navigation';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { projectsInfo } from '../../constants';

const searchById = (id) => {
  const foundProject = projectsInfo.find((project) => project.projectUrl === `/${id}`);
  if (!foundProject) {
    console.log('Project not found');
  }
  return foundProject;
};

const page = () => {
  const params = useParams();
  const projectInfo = searchById(params.projectId);

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image src={projectInfo.image} alt={projectInfo.name} fill cover="true" className="absolute z-1" />
        <div className="p-6 absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10">
          <h2 className="py-2">{projectInfo.name}</h2>
          <h3>
            {projectInfo.tech.map((tec) => (
              <span key={tec}> {tec} |</span>
            ))}
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#fcb00b]">web Project</p>
          <h2>Overview</h2>
          <p>{projectInfo.description}</p>
          <Link href={projectInfo.link} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href={projectInfo.github} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectInfo.tech.map((tec) => (
                <p className="text-gray-600 py-2 flex items-center" key={tec}>
                  <RiRadioButtonFill className="pr-1" />
                  {tec}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
