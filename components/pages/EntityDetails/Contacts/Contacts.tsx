import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLink, FaLinkedin } from 'react-icons/fa';

type ContactsProps = {
  contacts?: {
    website?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
};

const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <>
      <h1 className='text-3xl mb-9 text-neutrals-50'>Contacts</h1>
      <div className='flex flex-col gap-4'>
        {contacts?.website && (
          <div className='flex gap-2'>
            <FaLink size={24} />
            <Link href={contacts.website}>{contacts?.website}</Link>
          </div>
        )}
        {contacts?.facebook && (
          <div className='flex gap-2'>
            <FaFacebookSquare size={24} />
            <Link href={contacts.facebook}>{contacts?.facebook}</Link>
          </div>
        )}
        {contacts?.linkedin && (
          <div className='flex gap-2'>
            <FaLinkedin size={24} />
            <Link href={contacts.linkedin}>{contacts?.linkedin}</Link>
          </div>
        )}
        {contacts?.instagram && (
          <div className='flex gap-2'>
            <FaInstagramSquare size={24} />
            <Link href={contacts.instagram}>{contacts?.instagram}</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Contacts;
