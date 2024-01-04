'use client';

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Profile = () => { 
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    }
  });
  return (
    <>
      <h1> Hello {data?.user?.email}</h1>
      <button onClick={() => signOut({ redirect: true, callbackUrl: '/login' })}>Logout</button>
    </>
  )
};

export default Profile;
