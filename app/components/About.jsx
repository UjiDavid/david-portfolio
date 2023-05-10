'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { David } from '../../public/assets';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 gap-8">
        <div className="col-span-2 text-base font-semibold">
          <p className="uppercase text-xl tracking-widest text-[#fcb00b]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a pixel pusher, I am a master of the digital canvas, using every pixel to its full potential to create unique and engaging user
            experiences. With a passion for design and a deep understanding of user behavior, I strive to bring my client's vision to life through
            intuitive and visually stunning interfaces. My approach to design is more than just aesthetics; it's about understanding the end-users'
            needs and designing interfaces that not only look great but also function flawlessly. I believe that every pixel counts, and each element
            must work together seamlessly to provide the user with an immersive and delightful experience.
          </p>
          <p className="py-2 text-gray-600">
            I spent Seven years studying Law in Benue State University(should be 5 years but got extended due to strike), but I’ve always been
            interested in Technology, from a young age I’ve always tried to understand how things work. I started learning HTML & CSS on my
            smartphone(Sololearn app) in 2019 because I didn’t have a laptop at the time. Since then I’ve picked up other interests like Digital
            Marketing, Graphic Design, Photography & Web Application Development.
          </p>
          <p className="py-2 text-gray-600">
            I am always on the lookout for new design trends and emerging technologies, incorporating them into my work to ensure that every project I
            undertake is cutting-edge and on-trend. I thrive on challenges and am passionate about taking on projects that push the limits of my
            creativity and skillset.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={David} width="auto" alt="Owoicho David Uji" />
        </div>
      </div>
    </div>
  );
};

export default About;
