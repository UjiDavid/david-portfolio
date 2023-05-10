'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';

const schema = yup.object({
  user_name: yup.string().required('Full name is a required field!'),
  user_email: yup.string().required('Email is a required field!').email('Email is not valid!'),
  telephone: yup.number('This is not a number').required('Phone Number is a required field!'),
  message: yup.string().required('Please enter a message!'),
});

function Form() {
  const contactForm = useRef();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (e) => {
    emailjs.sendForm('service_uz8bsb8', 'template_3uxq4ws', contactForm.current, 'TxNTIYrTh_fORTwSl').then(
      (result) => {
        toast.success('Message Sent');
        reset();
      },
      (error) => {
        toast.error(error.text);
      }
    );
  };

  return (
    <form ref={contactForm} onSubmit={handleSubmit(sendEmail)}>
      <fieldset>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="uppercase text-sm py-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="border-2 rounded-lg p-3 border-gray-300"
              name="user_name"
              {...register('user_name')}
            />
            <span className="error-message">{errors.user_name?.message}</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="telephone" className="uppercase text-sm py-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="border-2 rounded-lg p-3 border-gray-300"
              placeholder="233 00 000 0000"
              name="telephone"
              {...register('telephone')}
            />
            <span className="error-message w-[56vw] md:w-[80%]">{errors.telephone?.message}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="user_email" className="uppercase text-sm py-2">
            Email
          </label>
          <input
            type="text"
            className="border-2 rounded-lg p-3 border-gray-300"
            placeholder="text@email.com"
            name="user_email"
            {...register('user_email')}
          />
          <span className="error-message">{errors.user_email?.message}</span>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message" className="uppercase text-sm py-2">
            Message
          </label>
          <textarea name="message" className="border-2 rounded-lg p-3 border-gray-300" {...register('message')} rows="10"></textarea>
          <span className="error-message">{errors.message?.message}</span>
        </div>
        <button type="submit" className="w-full p-4 bg-[#fcb00b] text-gray-100 text-bold mt-4 hover:shadow-none">
          Send Message
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
