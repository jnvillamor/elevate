import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FooterLink } from '@/common';
import Links from './Links';
import Image from 'next/image';

const Footer = () => {
  const links: FooterLink[] = [
    {
      name: 'List & Mapping',
      links: [
        { name: 'All', href: '/' },
        { name: 'Startups', href: '/' },
        { name: 'Enablers', href: '/' }
      ]
    },
    {
      name: 'Dashboard',
      links: [{ name: 'Reports', href: '/' }]
    },
    {
      name: 'General',
      links: [
        { name: 'About', href: '/' },
        { name: 'Contact', href: '/' },
        { name: 'Log In', href: '/' }
      ]
    }
  ];

  return (
    <footer className='bg-primary-600 pt-40 pb-12 px-16'>
      <div className='flex justify-between'>
        <div>
          <h1 className='flex flex-col font-test_staff text-[60px] font-bold mb-8'>
            <span>Get in touch</span>
            <span>with us!</span>
          </h1>
          <div className='flex gap-6'>
            <FaFacebookSquare size={36} />
            <FaLinkedin size={36} />
            <FaInstagramSquare size={36} />
            <AiFillGoogleSquare size={36} />
          </div>
        </div>
        <div className='flex gap-40'>
          {links.map((link) => (
            <Links key={link.name} name={link.name} links={link.links} />
          ))}
        </div>
      </div>
      <div className='flex gap-5 items-end mt-40'>
        <Image src='/logo.svg' width={200} height={100} alt='logo'  className='w-1/6'/>
        <Image src='/logo-letter.svg' width={200} height={25} alt='logo' className='flex-1' />
      </div>
      <hr className='my-4'/>
      <div className='flex justify-between'>
        <div className='flex gap-12'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p>©Elevate 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
