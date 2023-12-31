'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { UserAuth } from '@/app/context/AuthContext';

const NavLinks = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true)

  const { user, googleSignIn, logOut } = UserAuth();

  const handleSigIn = async () =>{
    try{
      await googleSignIn()
    } catch(error) {
      console.log(error);
    }
  }

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthentication();
  }, [user]);

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
      {!user ? null : (
        <Link href='/profile'>
          <Button variant={pathname === '/profile' ? 'default' : 'outline_rounded'}>Profile</Button>
        </Link>
      )}

        {loading ? (<p>Loading...</p>) : !user ? (       
          <ul className='flex'>
            <li onClick={handleSigIn} className='p-2 pr-8 cursor-pointer'>
            Login
            </li>
            {/* <li onClick={handleSigIn} className='p-2 cursor-pointer'>
            Sign up
            </li> */}
            <Link href='/signup'>
              <Button variant={pathname === '/signup' ? 'default' : 'outline_rounded'}>Sign Up</Button>
            </Link>
          </ul>) : (
          <div>
            <p>Madayaw! {user.displayName}</p>
            <p onClick={handleSignOut} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-10 rounded-full' >Sign out</p>
          </div>
        )}

    </div>
  );
};

export default NavLinks;
