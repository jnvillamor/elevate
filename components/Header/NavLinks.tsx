'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname().split('/');
  const path = pathname[1] === undefined ? pathname[0] : pathname[1];

  return (
    <div className='flex items-center gap-6'>
      <Link href='/'>
        <Button variant={path === '' ? 'default' : 'outline_rounded'}>Home</Button>
      </Link>
      <Link href='/ecosystem-mapping'>
        <Button variant={path === 'ecosystem-mapping' ? 'default' : 'outline_rounded'}>Ecosystem Mapping</Button>
      </Link>
      <Link href='/dashboard'>
        <Button variant={path === 'dashboard' ? 'default' : 'outline_rounded'}>Dashboard</Button>
      </Link>
      <Link href='/login'>
        <Button variant={path === 'login' ? 'default' : 'outline_rounded'}>Log In</Button>
      </Link>
    </div>
  );
};

export default NavLinks;
