'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { logo } from '../../public/assets';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useParams } from 'next/navigation';

const NavItems = [
  {
    label: 'Home',
    link: 'home',
  },
  {
    label: 'About',
    link: 'about',
  },
  {
    label: 'Skills',
    link: 'skills',
  },
  {
    label: 'Projects',
    link: 'projects',
  },
  {
    label: 'Contact',
    link: 'contact',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const params = useParams();

  useEffect(() => {
    if (params.projectId) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [params]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}
    >
      <div className="flex justify-between items-center w-full h-full px-2 md:px-6 2xl:px-16">
        <Link href="/">
          <Image src={logo} alt="logo" height={60} className="cursor-pointer" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {NavItems.map((item, idx) => {
              return (
                <Link href={`/#${item.link}`} key={idx} className="ml-10 font-semibold uppercase hover:border-b-2 hover:border-b-[#fcb00b]">
                  {item.label}
                </Link>
              );
            })}
          </ul>
          <div onClick={() => setNav(!nav)} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] border-r-[10px] border-r-[#fcb00b] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] w-[75%] sm:w-[60%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} alt="logo" height="87" className="p-4" />
              </Link>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer">
                <AiOutlineClose onClick={() => setNav(!nav)} size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 font-semibold">
              <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              {NavItems.map((item, idx) => {
                return (
                  <Link href={`/#${item.link}`} key={idx} className="font-semibold uppercase">
                    <li className="py-4">{item.label}</li>
                  </Link>
                );
              })}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-bold text-[#fcb00b]">Let's connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/owoicho-uji-505255230/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn size={20} />
                  </div>
                </Link>
                <Link href="https://github.com/Ujidavid" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub size={20} />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/pixelsbyowie/" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram size={20} />
                  </div>
                </Link>
                <Link href="https://twitter.com/pixelsbyowie" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitter size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
