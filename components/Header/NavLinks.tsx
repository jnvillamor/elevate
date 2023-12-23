'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className='flex items-center gap-6'>
      <Link href='/'>
        <Button variant={pathname === '/' ? 'default' : 'outline_rounded'}>Home</Button>
      </Link>
      <Link href='/ecosystem-mapping'>
        <Button variant={pathname === '/ecosystem-mapping' ? 'default' : 'outline_rounded'}>Ecosystem Mapping</Button>
      </Link>
      <Link href='/dashboard'>
        <Button variant={pathname === '/dashboard' ? 'default' : 'outline_rounded'}>Dashboard</Button>
      </Link>
      <Link href='/contact'>
        <Button variant={pathname === '/contact' ? 'default' : 'outline_rounded'}>Contact</Button>
      </Link>
    </div>
  );
};

export default NavLinks;
