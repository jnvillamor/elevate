import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { signOut, useSession } from 'next-auth/react';

type NavLinksProps = { path: string };

const NavLinks = ({ path }: NavLinksProps) => {
  const session = useSession();

  return (
    <div className='flex items-center gap-6'>
      <Link href='/'>
        <Button variant={path === '' ? 'default' : 'outline_rounded'}>Home</Button>
      </Link>
      <Link href='/ecosystem-mapping'>
        <Button variant={path === 'ecosystem-mapping' ? 'default' : 'outline_rounded'}>Ecosystem Mapping</Button>
      </Link>
      <Link href='/contact'>
        <Button variant={path === 'contact' ? 'default' : 'outline_rounded'}>Contact</Button>
      </Link>

      {session.status === 'authenticated' && (
        <>
          <Link href='/profile'>
            <Button variant={path === 'profile' ? 'default' : 'outline_rounded'}>Profile</Button>
          </Link>
          <Button variant='ghost' className='rounded-full hover:bg-negative-400 hover:text-neutrals-50' onClick={() => signOut({ callbackUrl: '/login' })}>
            Log Out
          </Button>
        </>
      )}

      {session.status === 'unauthenticated' && (
        <>
          <Link href='/login'>
            <Button variant='outline_rounded'>Log In</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavLinks;
