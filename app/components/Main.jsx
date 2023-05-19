'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiArrowDown } from 'react-icons/hi';
import Link from 'next/link';
import { connect } from '../../public/assets';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-20 pt-20">
          <p className="uppercase mt-5 text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-3 text-gray-700">
            Hi, I'm <span className="text-[#fcb00b]">David</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            I'm a{' '}
            <Typewriter
              words={['Web Developer', 'Graphic Designer', 'Photographer']}
              loop
              cursor
              cursorColor="#fcb00b"
              cursorBlinking
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] text-lg font-semibold m-auto">
            I'm the founder of <span className="text-bold text-[#fcb00b]">Pixels by Owie,</span> I
            push pixels to create unique and engaging user experiences. With a passion for design
            and a deep understanding of user behavior, I strive to bring my client's vision to life
            through intuitive and visually stunning interfaces.
          </p>
          <div className="connect_container md:w-[28%]">
            <div className="connect_socials main items-center justify-center">
              <div className="up ">
                <Link
                  className="card1 shadow-lg shadow-gray-400"
                  href="https://www.instagram.com/pixelsbyowie/"
                  target="_blank"
                >
                  <FaInstagram size={40} className="instagram" />
                </Link>
                <Link
                  className="card2 shadow-lg shadow-gray-400"
                  href="https://twitter.com/pixelsbyowie"
                  target="_blank"
                >
                  <FaTwitter size={40} className="twitter" />
                </Link>
              </div>
              <div className="down">
                <Link
                  className="card3 shadow-lg shadow-gray-400"
                  href="https://github.com/Ujidavid"
                  target="_blank"
                >
                  <FaGithub size={40} className="github" />
                </Link>
                <Link
                  className="card4 shadow-lg shadow-gray-400"
                  href="https://www.linkedin.com/in/owoicho-uji-505255230/"
                  target="_blank"
                >
                  <FaLinkedinIn size={40} className="linkedin" />
                </Link>
              </div>
            </div>
            <img
              src={connect.src}
              alt="connect with me"
              className="items-center justify-center connect_svg"
            />
          </div>
          <div className="flex items-center max-w-[330px] m-auto py-6">
            <Link href="/#contact">
              <div className="flex items-center justify-between border-r-2 border-gray-500 rounded-l-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-95 ease-in duration-300">
                <p className="px-3">Hire me</p> <AiOutlineMail size={25} />
              </div>
            </Link>
            <a href="DavidUji_resume.pdf" download="DavidUji_resume.pdf">
              <div className="flex items-center justify-between border-l-2 border-gray-500 rounded-r-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-95 ease-in duration-300">
                <p className="px-3">Download Resume</p> <HiArrowDown size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
