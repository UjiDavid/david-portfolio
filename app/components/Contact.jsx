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
                <Image src={contactImg} alt="Owoicho David Uji" className="rounded-xl hover:scale-105 ease-in duration-300" />
              </div>
              <div>
                <h2 className="py-2">Owoicho David Uji</h2>
                <p className="font-bold">
                  <Typewriter words={['Web Developer', 'Graphic Designer', 'Photographer']} loop cursor cursorColor="#fcb00b" cursorBlinking />
                </p>
                <p className="py-4 font-semibold">I'm available for freelance or full-time postions. Contact me and let's talk</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/owoicho-uji-505255230/" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn size={20} />
                    </div>
                  </Link>
                  <Link href="https://github.com/Ujidavid" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub size={20} />
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com/pixelsbyowie/" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram size={20} />
                    </div>
                  </Link>
                  <Link href="https://twitter.com/pixelsbyowie" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaTwitter size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <Form />
              {/* <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor='user_name' className="uppercase text-sm py-2">Full Name</label>
                    <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="user_name" />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="user_number" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 border-gray-300" type="email" name="user_email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea name="message" className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                </div>
                <button className="w-full p-4 bg-[#fcb00b] text-gray-100 text-bold mt-4 hover:shadow-none">Send Message</button>
              </form> */}
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
