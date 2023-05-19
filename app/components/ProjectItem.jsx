'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProjectItem = ({ title, image, link, description, tech, projectUrl }) => {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col md:flex-row iteems-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fcb00b] to-[#00b4fd]">
        <Image className="rounded-xl group-hover:opacity-30" src={image} alt={title} />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
          <p className="pb-4 pt-2 text-white text-center">
            {tech.map((tec) => (
              <span key={tec}> {tec} |</span>
            ))}
          </p>
          <div className="flex flex-row gap-8">
            <p
              onClick={() => router.push(`/project/${projectUrl}`)}
              className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
            >
              More Info
            </p>
            <Link
              href={link}
              target="_blank"
              className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
            >
              Open Project
            </Link>
          </div>
        </div>
        <div className="p-3 md:hidden">
          <h3 className="text-2xl font-bold tracking-wider text-center">{title}</h3>
          <p className="pb-4 pt-2 text-center">
            {tech.map((tec) => (
              <span key={tec}> {tec} |</span>
            ))}
          </p>
          <div className="flex flex-col gap-3">
            <p
              onClick={() => router.push(`/project/${projectUrl}`)}
              className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
            >
              More Info
            </p>
            <Link
              href={link}
              target="_blank"
              className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
            >
              Open Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
