'use client';

import Image from 'next/image';

const GraphicItem = ({ title, image, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#fcb00b] to-[#00b4fd]">
      <Image className="rounded-xl group-hover:opacity-30" src={image} alt={title} />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
      </div>
      <div className="md:hidden p-3">
        <h3 className="text-2xl font-bold tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{description}</p>
      </div>
    </div>
  );
};

export default GraphicItem;
