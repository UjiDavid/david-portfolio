'use client';
import React, { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Form from './Form';
import { Typewriter } from 'react-simple-typewriter';

import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { contactImg } from '../../public/assets';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[100vw] md:max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#fcb00b]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 w-full shadow-xl shadow-gray-400 p-4 rounded-xl">
            <div className="lg:p-2 h-full">
              <div>
                <Image
                  src={contactImg}
                  alt="Owoicho David Uji"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Owoicho David Uji</h2>
                <p className="font-bold">
                  <Typewriter
                    words={['Web Developer', 'Graphic Designer', 'Photographer']}
                    loop
                    cursor
                    cursorColor="#fcb00b"
                    cursorBlinking
                  />
                </p>
                <p className="py-4 font-semibold">
                  I'm available for freelance or full-time postions. Contact me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <ul className="social">
                    <li className="social-item">
                      <Link
                        className="social-link"
                        href="https://www.linkedin.com/in/owoicho-uji-505255230/"
                        target="_blank"
                      >
                        <FaLinkedinIn size={20} />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link
                        className="social-link"
                        href="https://twitter.com/pixelsbyowie"
                        target="_blank"
                      >
                        <FaTwitter size={20} />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link
                        className="social-link"
                        href="https://github.com/Ujidavid"
                        target="_blank"
                      >
                        <FaGithub size={20} />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link
                        className="social-link"
                        href="https://www.instagram.com/pixelsbyowie/"
                        target="_blank"
                      >
                        <FaInstagram size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <Form />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#fcb00b]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
