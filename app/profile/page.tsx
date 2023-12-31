'use client'
import React, { useState, useEffect } from 'react'
import { UserAuth } from '@/app/context/AuthContext';

const page = () => {
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthentication();
  }, [user]);

  return (
    <div className='p-4'>
      {loading ? (<p>Loading...</p>) : user ? (
        <p>Madayaw! {user.displayName} - you are logged in to the profile page - a protected route</p>
      ) : (<p>You must be logged in to view thie page - protected route</p>)}
    
    <p>Test</p>
    </div>
    );
  };
  
  export default page;
  