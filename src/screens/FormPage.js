import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="LastName"
          {...register('LastName', { required: true, min: 0, maxLength: 255 })}
        />
        <input
          type="text"
          placeholder="FirstName"
          {...register('FirstName', { required: true, min: 0, maxLength: 255 })}
        />
        <input
          type="text"
          placeholder="Organization name "
          {...register('Organization name ', {
            required: true,
            min: 0,
            maxLength: 255,
          })}
        />
        <input
          type="text"
          placeholder="Project Name"
          {...register('Project Name', { required: true, maxLength: 255 })}
        />
        <textarea {...register('Project description', { required: true })} />
        <select {...register}>
          <option value="Graphics & Design">Graphics & Design</option>
          <option value=" Digital Marketing"> Digital Marketing</option>
          <option value=" Writing & Translation"> Writing & Translation</option>
          <option value=" Video & Animation"> Video & Animation</option>
          <option value=" Music & Audio"> Music & Audio</option>
          <option value="  Programming & Tech "> Programming & Tech </option>
          <option value=" Business"> Business</option>
        </select>
        <select {...register('Skills', { required: true })}>
          <option value="WordPress ">WordPress </option>
          <option value=" Website Builders & CMS ">
            {' '}
            Website Builders & CMS{' '}
          </option>
          <option value=" Game Development "> Game Development </option>
          <option value=" Web Programming"> Web Programming</option>
          <option value="  E-Commerce Development ">
            {' '}
            E-Commerce Development{' '}
          </option>
          <option value=" Mobile Apps "> Mobile Apps </option>
          <option value=" Cybersecurity & Data Protection">
            {' '}
            Cybersecurity & Data Protection
          </option>
          <option value=" Chatbots"> Chatbots</option>
          <option value=" Social Media Advertising ">
            {' '}
            Social Media Advertising{' '}
          </option>
          <option value=" Social Media Marketing  ">
            {' '}
            Social Media Marketing{' '}
          </option>
          <option value=" Search Engine Optimization (SEO)">
            {' '}
            Search Engine Optimization (SEO)
          </option>
          <option value=" Logo Design  "> Logo Design </option>
          <option value=" Brand Style Guides  "> Brand Style Guides </option>
          <option value=" Game Art "> Game Art </option>
          <option value=" Articles & Blog Posts ">
            {' '}
            Articles & Blog Posts{' '}
          </option>
          <option value=" Proofreading & Editing ">
            {' '}
            Proofreading & Editing{' '}
          </option>
          <option value=" Translation"> Translation</option>
          <option value="  Video Editing "> Video Editing </option>
          <option value=" Short Video Ads"> Short Video Ads</option>
        </select>
        <input
          type="number"
          placeholder="Number of member"
          {...register('Number of member', { required: true })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
